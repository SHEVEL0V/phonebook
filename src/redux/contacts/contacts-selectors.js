const responseSel = state => state.contacts.response;

const loadingAddSel = state => state.contacts.loadingAdd;

const loadingDeleteSel = state => state.contacts.loadingDelete;

const loadingStatusSel = state => state.contacts.loadingStatus;

const dataSel = state => state.contacts.data;

const totalSel = state => state.contacts.data.total;

const onGetContactsSel = state => state.contacts.onGetContacts;

export {
  dataSel,
  responseSel,
  loadingAddSel,
  loadingDeleteSel,
  loadingStatusSel,
  totalSel,
  onGetContactsSel,
};
