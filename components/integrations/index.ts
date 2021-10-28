// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {getConfig} from 'mattermost-redux/selectors/entities/general';

<<<<<<< HEAD:components/integrations/index.ts
import Integrations from './integrations';
import { GlobalState } from 'mattermost-redux/types/store';

function mapStateToProps(state: GlobalState) {
    const config = getConfig(state);
    const siteName = config.SiteName!;
=======
import {GlobalState} from 'mattermost-redux/types/store';

import Integrations from './integrations';

function mapStateToProps(state: GlobalState) {
    const config = getConfig(state);
    const siteName = config.SiteName ?? '';
>>>>>>> 23de6f93b5b3b784f78e6e98fbf092e80531bbc2:components/integrations/index.js
    const enableIncomingWebhooks = config.EnableIncomingWebhooks === 'true';
    const enableOutgoingWebhooks = config.EnableOutgoingWebhooks === 'true';
    const enableCommands = config.EnableCommands === 'true';
    const enableOAuthServiceProvider = config.EnableOAuthServiceProvider === 'true';

    return {
        siteName,
        enableIncomingWebhooks,
        enableOutgoingWebhooks,
        enableCommands,
        enableOAuthServiceProvider,
    };
}

export default connect(mapStateToProps)(Integrations);
