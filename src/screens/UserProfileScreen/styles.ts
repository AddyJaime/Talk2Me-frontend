import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  statusText: {
    marginTop: 60,
    marginBottom: 20,
    marginHorizontal: 18,
    fontSize: 28,
    fontWeight: '600',
  },


  avatarCard: { alignItems: 'center', marginTop: 100, marginBottom: 8 },
  avatar: { borderRadius: 100 },
  avatarEdit: { marginTop: 8, color: '#0A84FF', fontWeight: '600' },


  list: { paddingHorizontal: 16, marginTop: 8 },
  cellLabel: { fontSize: 12, color: '#6A6A6A', marginTop: 16, marginBottom: 6 },
  cellBox: { backgroundColor: '#E9E9E9', borderRadius: 6, padding: 12 },
  disabledBox: { opacity: 0.7 },
  cellValue: { fontSize: 15, color: '#111' },


  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.35)', justifyContent: 'flex-end' },
  modalCard: { backgroundColor: '#fff', padding: 16, borderTopLeftRadius: 16, borderTopRightRadius: 16 },
  modalTitle: { fontSize: 16, fontWeight: '600', marginBottom: 12 },
  input: { borderWidth: 1, borderColor: '#DDD', borderRadius: 8, padding: 12, fontSize: 15 },
  actions: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 },


  cancelbutton: { fontSize: 16, color: '#FF3B30', marginRight: 20 },
  saveButton: { fontSize: 16, color: '#0A84FF', fontWeight: '600' },
});

export default styles;
