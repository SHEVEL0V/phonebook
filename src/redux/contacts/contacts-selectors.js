const responseSel = state => state.contacts.response;
const loadingGetSel = state => state.contacts.loadingGet;
const loadingAddSel = state => state.contacts.loadingAdd;
const loadingUpdateSel = state => state.contacts.loadingUpdate;
const loadingDeleteSel = state => state.contacts.loadingDelete;
const loadingStatusSel = state => state.contacts.loadingStatus;
const errorUpdateSel = state => state.contacts.errorUpdate;
const errorAddSel = state => state.contacts.errorAdd;
const dataSel = state => state.contacts.data;
const totalSel = state => state.contacts.data.total;
const idSel = state => state.contacts.id;

export {
  dataSel,
  responseSel,
  loadingGetSel,
  loadingAddSel,
  loadingUpdateSel,
  loadingDeleteSel,
  loadingStatusSel,
  errorUpdateSel,
  totalSel,
  errorAddSel,
  idSel,
};
