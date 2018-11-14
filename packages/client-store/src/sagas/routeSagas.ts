import {put, takeEvery, Pattern} from 'redux-saga/effects'
import {isLocation} from '../nav'
import {CALL_HISTORY_METHOD} from 'connected-react-router'
import {isFrontend} from '@sha/utils'

export default function* routeSaga() {
    yield takeEvery(isRecordableAction as Pattern, recordHisotryAction)
}

function* recordHisotryAction(action) {
    yield put({...action, type: CALL_HISTORY_METHOD})
}

const isRecordableAction = action =>
    isLocation()(action) && action.payload.recordToHisotry && isFrontend()

