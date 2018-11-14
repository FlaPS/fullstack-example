import {DebugProps, ProfileView} from '@local/ui'
import {connect} from 'react-redux'
import {FrontState} from '@local/client-store/src/reducer'
import {caseRender} from '@sha/react-fp'
import {WithHistoryProps} from './WithHistoryProps'
import {nav, Profile, skillsAppDuck} from '@local/client-store'

export default connect(
    (state: FrontState) => ({
        value: state.app.profile.result,
    }),
    (dispatch, {history}: WithHistoryProps) =>
        ({
            onBack: () => history.replace(nav.index()),
            onChange: (value: Profile) => dispatch(skillsAppDuck.actions.updateProfile(value)),
        }),
)(
    caseRender(ProfileView)
        .isNilOrEmpty('value', 'Загрузка профиля пользователя'),
)

