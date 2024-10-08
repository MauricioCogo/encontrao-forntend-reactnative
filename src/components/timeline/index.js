import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import { getTimelineByUser } from '../../services/Timeline/';
import { format, parseISO } from 'date-fns';

const Schedule = ({ id }) => {
    const [data, setTimeline] = useState([]);

    const getRowStyle = (index, total) => {
        const percentage = (index / (total - 1)) * 100;
        return {
            backgroundColor: `rgba(255, ${255 - (percentage * 0.6)}, ${255 - (percentage * 0.6)}, 1)`,
        };
    };

    useEffect(() => {
        const fetchTimeline = async () => {
            try {
                const fetchedTimeline = await getTimelineByUser(id);
                console.log('Fetched Timeline Data:', fetchedTimeline);
                if (Array.isArray(fetchedTimeline)) {
                    setTimeline(fetchedTimeline);
                } else {
                    console.error('Fetched data is not an array:', fetchedTimeline);
                }
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchTimeline();
    }, [id]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.table}>
                <View style={styles.tableHeader}>
                    <Text style={styles.headerCell}>Data e hora</Text>
                    <Text style={styles.headerCell}>Atividade</Text>
                    <Text style={styles.headerCell}>Tipo</Text>
                    <Text style={styles.headerCell}>Local</Text>
                </View>
                {data && data.length > 0 ? (
                    <>
                        {data.map((item, index) => (
                            <View key={index} style={[styles.tableRow, getRowStyle(index, data.length)]}>
                                <View style={styles.dateContainer}>
                                    <Text style={styles.label}>{"às ou até às"}</Text>
                                    <Text style={styles.date}>{`${format(parseISO(item.date), 'dd/MM')}`}</Text>
                                    <Text style={styles.date}>{`${format(parseISO(item.date), 'HH:mm')}`}</Text>
                                </View>
                                <Text style={styles.cell}>{item.name}</Text>
                                <Text style={styles.cell}>{item.type}</Text>
                                <Text style={styles.cell}>{item.local}</Text>
                            </View>
                        ))}
                        <View style={styles.tableFooter}>
                            <Text style={styles.footerText}>Fim da Tabela</Text>
                        </View>
                    </>
                ) : (
                    <Text style={styles.emptyText}>Nenhum dado disponível.</Text>
                )}

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    table: {
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#fff',
        boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#ea2a26',
    },
    headerCell: {
        flex: 1,
        padding: 12,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'left',
        borderBottomWidth: 2,
        borderBottomColor: '#c42a21',
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    cell: {
        flex: 1,
        padding: 12,
        color: '#333',
        textAlign: 'left',
    },
    dateContainer: {
        flex: 1, // Utilize o mesmo espaço que outras células
        flexDirection: 'column', // Alinhar verticalmente
        justifyContent: 'flex-start', // Começar do topo
        padding: 10
    },
    tableFooter: {
        backgroundColor: '#ea2a26',
        padding: 12,
        alignItems: 'center',
    },
    footerText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    label: {
        fontWeight: 'bold',
        color: '#333',
    },
    date: {
        color: '#666',
        fontSize: 14,
    },
    emptyText: {
        fontWeight: 'bold',
        textAlign: "center",
        fontSize: 20
    }
});

export default Schedule;
