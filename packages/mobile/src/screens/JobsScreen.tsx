import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Clock, MapPin, ChevronRight } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const JOBS_DATA = [
    { id: '1', customer: 'John Smith', address: '123 Oak St, Springfield', time: '8:00 AM - 12:00 PM', status: 'en_route', type: 'Repair' },
    { id: '2', customer: 'Alice Cooper', address: '789 Pine Rd, Springfield', time: '1:00 PM - 5:00 PM', status: 'scheduled', type: 'Maintenance' },
];

export default function JobsScreen() {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.jobCard}
            onPress={() => navigation.navigate('JobDetails', { jobId: item.id })}
        >
            <View style={styles.cardHeader}>
                <Text style={styles.jobType}>{item.type}</Text>
                <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) }]}>
                    <Text style={styles.statusText}>{item.status.toUpperCase()}</Text>
                </View>
            </View>

            <Text style={styles.customerName}>{item.customer}</Text>

            <View style={styles.infoRow}>
                <MapPin size={16} color="#64748b" />
                <Text style={styles.infoText}>{item.address}</Text>
            </View>

            <View style={styles.infoRow}>
                <Clock size={16} color="#64748b" />
                <Text style={styles.infoText}>{item.time}</Text>
            </View>

            <ChevronRight size={20} color="#cbd5e1" style={styles.chevron} />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={JOBS_DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContent}
                ListHeaderComponent={<Text style={styles.header}>Your Schedule</Text>}
            />
        </SafeAreaView>
    );
}

const getStatusColor = (status) => {
    switch (status) {
        case 'en_route': return '#f59e0b';
        case 'on_site': return '#8b5cf6';
        case 'completed': return '#10b981';
        default: return '#3b82f6';
    }
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f8fafc' },
    listContent: { padding: 16 },
    header: { fontSize: 24, fontWeight: 'bold', color: '#0f172a', marginBottom: 20 },
    jobCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 3,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        position: 'relative'
    },
    cardHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
    jobType: { fontSize: 12, fontWeight: '700', color: '#64748b', letterSpacing: 0.5 },
    statusBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
    statusText: { color: '#fff', fontSize: 10, fontWeight: '800' },
    customerName: { fontSize: 18, fontWeight: '700', color: '#0f172a', marginBottom: 12 },
    infoRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 6 },
    infoText: { fontSize: 14, color: '#64748b' },
    chevron: { position: 'absolute', right: 16, top: '50%', marginTop: 10 }
});
