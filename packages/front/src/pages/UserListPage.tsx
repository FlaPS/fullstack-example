import {UsersList} from '@local/ui'
import {connect} from 'react-redux'
import {caseRender} from '@sha/react-fp'
import {WithHistoryProps} from './WithHistoryProps'
import {nav} from '@local/client-store'
import {compose} from 'redux'
import {applySpec, view, lensPath} from 'ramda'


const mapDispatch = (dispatch, {history}: WithHistoryProps) => ({
    onSelect: compose(history.push, nav.profile),
})

const mapState = applySpec({
    data: view(lensPath(['app', 'users', 'value'])),
})

const MaybeUsersList = caseRender(UsersList)
    .isNil('data', 'Загрузка списка пользователей')
    .isEmpty('data', 'Список пользователей пуст')

export default connect(mapState, mapDispatch)(MaybeUsersList)

