import {ProfileView} from '@local/ui'
import {connect} from 'react-redux'
import {caseRender} from '@sha/react-fp'
import {WithHistoryProps} from './WithHistoryProps'
import {nav, skillsAppDuck} from '@local/client-store'
import {compose} from 'redux'
import {applySpec, view, lensPath} from 'ramda'


const mapDispatch = (dispatch, {history}: WithHistoryProps) => ({
    onBack: compose(history.replace, nav.index),
    onChange: compose(dispatch, skillsAppDuck.actions.updateProfile),
})

const mapState = applySpec({
    value: view(lensPath(['app', 'profile', 'value'])),
})

const MaybeProfileView = caseRender(ProfileView)
    .isNil('value', 'Загрузка профиля пользователя')
    .isEmpty('value', 'Профиль не найден')

export default connect(mapState, mapDispatch)(MaybeProfileView)

