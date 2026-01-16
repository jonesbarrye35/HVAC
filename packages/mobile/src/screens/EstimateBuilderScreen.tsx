import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { Plus, Trash2, CheckCircle } from 'lucide-react-native';

const PRICEBOOK = [
    { id: 'p1', name: 'Service Call / Diagnostic', price: 95.00 },
    { id: 'p2', name: 'Standard Labor (Hourly)', price: 125.00 },
    { id: 'p3', name: '45uF Run Capacitor', price: 45.00 },
    { id: 'p4', name: 'Refrigerant R-410A (per lb)', price: 85.00 },
    { id: 'p5', name: 'Contactor (Single Pole)', price: 65.00 },
];

export default function EstimateBuilderScreen({ navigation }) {
    const [items, setItems] = useState([{ id: '1', name: 'Service Call', qty: 1, price: 95.00 }]);

    const subtotal = items.reduce((sum, item) => sum + (item.qty * item.price), 0);
    const tax = subtotal * 0.0825; // Example 8.25%
    const total = subtotal + tax;

    const addItem = (template) => {
        setItems([...items, { id: Math.random().toString(), ...template, qty: 1 }]);
    };

    const removeItem = (id) => {
        setItems(items.filter(i => i.id !== id));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Create Estimate</Text>
            </View>

            <View style={styles.summaryCard}>
                <View style={styles.summaryRow}><Text>Subtotal</Text><Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text></View>
                <View style={styles.summaryRow}><Text>Tax (8.25%)</Text><Text style={styles.summaryValue}>${tax.toFixed(2)}</Text></View>
                <View style={[styles.summaryRow, styles.totalRow]}><Text style={styles.totalLabel}>Total</Text><Text style={styles.totalValue}>${total.toFixed(2)}</Text></View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Pricebook (Quick Add)</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={PRICEBOOK}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.pricebookItem} onPress={() => addItem(item)}>
                            <Text style={styles.pricebookName}>{item.name}</Text>
                            <Text style={styles.pricebookPrice}>${item.price}</Text>
                            <Plus size={16} color="#3b82f6" />
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                    style={styles.pricebookList}
                />
            </View>

            <View style={[styles.section, { flex: 1 }]}>
                <Text style={styles.sectionTitle}>Line Items</Text>
                <FlatList
                    data={items}
                    renderItem={({ item }) => (
                        <View style={styles.lineItem}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemMeta}>{item.qty} x ${item.price.toFixed(2)}</Text>
                            </View>
                            <TouchableOpacity onPress={() => removeItem(item.id)}>
                                <Trash2 size={20} color="#ef4444" />
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>

            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.submitBtn}
                    onPress={() => navigation.goBack()}
                >
                    <CheckCircle size={20} color="#fff" />
                    <Text style={styles.submitBtnText}>PREVIEW & SEND</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f8fafc' },
    header: { padding: 16, backgroundColor: '#0f172a' },
    title: { fontSize: 20, fontWeight: '800', color: '#fff' },
    summaryCard: { margin: 16, padding: 16, backgroundColor: '#fff', borderRadius: 12, borderWidth: 1, borderColor: '#e2e8f0' },
    summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
    summaryValue: { fontWeight: '600', color: '#334155' },
    totalRow: { marginTop: 8, paddingTop: 8, borderTopWidth: 1, borderTopColor: '#f1f5f9' },
    totalLabel: { fontSize: 18, fontWeight: '800', color: '#0f172a' },
    totalValue: { fontSize: 18, fontWeight: '800', color: '#3b82f6' },
    section: { paddingHorizontal: 16, marginBottom: 24 },
    sectionTitle: { fontSize: 12, fontWeight: '800', color: '#94a3b8', letterSpacing: 1, marginBottom: 12, textTransform: 'uppercase' },
    pricebookList: { marginHorizontal: -16, paddingHorizontal: 16 },
    pricebookItem: { backgroundColor: '#fff', padding: 12, borderRadius: 10, marginRight: 10, borderWidth: 1, borderColor: '#e2e8f0', width: 140, alignItems: 'center' },
    pricebookName: { fontSize: 11, fontWeight: '700', textAlign: 'center', marginBottom: 4, height: 30 },
    pricebookPrice: { fontSize: 13, fontWeight: '600', color: '#3b82f6', marginBottom: 8 },
    lineItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 16, borderRadius: 12, marginBottom: 10, borderWidth: 1, borderColor: '#e2e8f0' },
    itemName: { fontSize: 15, fontWeight: '600', color: '#1e293b' },
    itemMeta: { fontSize: 13, color: '#64748b' },
    footer: { padding: 16, backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#e2e8f0' },
    submitBtn: { backgroundColor: '#10b981', borderRadius: 12, padding: 18, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 },
    submitBtnText: { color: '#fff', fontSize: 16, fontWeight: '800', letterSpacing: 1 }
});
