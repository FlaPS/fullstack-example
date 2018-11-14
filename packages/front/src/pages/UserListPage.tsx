import {UsersList} from '@local/ui'
import {connect} from 'react-redux'
import {FrontState} from '@local/client-store/src/reducer'
import {nav, push} from '@local/client-store'
import {WithHistoryProps} from './WithHistoryProps'
import {caseRender} from '@sha/react-fp'


export default connect(
    (state: FrontState, {history}: WithHistoryProps) => ({
        data: state.app.users.result,
        onSelect: obj =>
            history.push(nav.profile(obj)),
    }),
)(
    caseRender(UsersList)
        .isNilOrEmpty('data', 'Загрузка списка пользователей'),
)

