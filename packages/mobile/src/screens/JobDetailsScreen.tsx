import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Phone, Navigation as NavIcon, MessageSquare, Camera, PlusCircle } from 'lucide-react-native';

export default function JobDetailsScreen({ route }) {
    const { jobId } = route.params;
    const [status, setStatus] = useState('scheduled');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Customer</Text>
                    <Text style={styles.customerName}>John Smith</Text>
                    <Text style={styles.address}>123 Oak St, Springfield, IL 62704</Text>

                    <View style={styles.actionRow}>
                        <TouchableOpacity style={styles.actionBtn}><Phone size={20} color="#3b82f6" /><Text style={styles.actionBtnText}>Call</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.actionBtn}><NavIcon size={20} color="#3b82f6" /><Text style={styles.actionBtnText}>Navigate</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.actionBtn}><MessageSquare size={20} color="#3b82f6" /><Text style={styles.actionBtnText}>Text</Text></TouchableOpacity>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Equipment</Text>
                    <View style={styles.equipmentCard}>
                        <Text style={styles.equipName}>Carrier Infinity Air Conditioner</Text>
                        <Text style={styles.equipSerial}>SN: 0918X23490 | Model: 24VNA9</Text>
                        <Text style={styles.lastService}>Last Service: Oct 12, 2025</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Job Actions</Text>
                    <View style={styles.actionsGrid}>
                        <TouchableOpacity style={styles.gridBtn}><Camera size={24} color="#64748b" /><Text style={styles.gridBtnText}>Take Photos</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.gridBtn}><PlusCircle size={24} color="#64748b" /><Text style={styles.gridBtnText}>Add Estimate</Text></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                {status === 'scheduled' && (
                    <TouchableOpacity style={styles.mainAction} onPress={() => setStatus('en_route')}>
                        <Text style={styles.mainActionText}>EN ROUTE</Text>
                    </TouchableOpacity>
                )}
                {status === 'en_route' && (
                    <TouchableOpacity style={[styles.mainAction, { backgroundColor: '#8b5cf6' }]} onPress={() => setStatus('on_site')}>
                        <Text style={styles.mainActionText}>ARRIVED ON SITE</Text>
                    </TouchableOpacity>
                )}
                {status === 'on_site' && (
                    <TouchableOpacity style={[styles.mainAction, { backgroundColor: '#10b981' }]} onPress={() => setStatus('completed')}>
                        <Text style={styles.mainActionText}>WORK COMPLETE</Text>
                    </TouchableOpacity>
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f8fafc' },
    scrollContent: { padding: 16, paddingBottom: 100 },
    section: { marginBottom: 24 },
    sectionTitle: { fontSize: 12, fontWeight: '800', color: '#94a3b8', letterSpacing: 1, marginBottom: 8, textTransform: 'uppercase' },
    customerName: { fontSize: 22, fontWeight: '800', color: '#0f172a', marginBottom: 4 },
    address: { fontSize: 16, color: '#64748b', marginBottom: 16 },
    actionRow: { flexDirection: 'row', gap: 12 },
    actionBtn: { flex: 1, backgroundColor: '#eff6ff', borderRadius: 8, padding: 12, alignItems: 'center', gap: 4 },
    actionBtnText: { fontSize: 12, fontWeight: '700', color: '#3b82f6' },
    equipmentCard: { backgroundColor: '#fff', borderRadius: 12, padding: 16, borderWidth: 1, borderColor: '#e2e8f0' },
    equipName: { fontSize: 16, fontWeight: '700', color: '#0f172a', marginBottom: 4 },
    equipSerial: { fontSize: 14, color: '#64748b', marginBottom: 4 },
    lastService: { fontSize: 12, color: '#94a3b8' },
    actionsGrid: { flexDirection: 'row', gap: 12 },
    gridBtn: { flex: 1, backgroundColor: '#fff', borderRadius: 12, padding: 20, alignItems: 'center', gap: 8, borderWidth: 1, borderColor: '#e2e8f0' },
    gridBtnText: { fontSize: 13, fontWeight: '600', color: '#334155' },
    footer: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20, backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#e2e8f0' },
    mainAction: { backgroundColor: '#3b82f6', borderRadius: 12, padding: 18, alignItems: 'center' },
    mainActionText: { color: '#fff', fontSize: 16, fontWeight: '800', letterSpacing: 1 }
});
