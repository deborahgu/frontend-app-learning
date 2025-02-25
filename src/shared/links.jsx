import React from 'react';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';
import { getConfig } from '@edx/frontend-platform';
import { Hyperlink } from '@openedx/paragon';

import messages from '../courseware/course/course-exit/messages';

const IntlDashboardLink = ({ intl }) => (
  <Hyperlink
    variant="muted"
    isInline
    destination={`${getConfig().LMS_BASE_URL}/dashboard`}
  >
    {intl.formatMessage(messages.dashboardLink)}
  </Hyperlink>
);

IntlDashboardLink.propTypes = {
  intl: intlShape.isRequired,
};

const IntlIdVerificationSupportLink = ({ intl }) => {
  if (!getConfig().SUPPORT_URL_ID_VERIFICATION) {
    return null;
  }
  return (
    <Hyperlink
      variant="muted"
      isInline
      destination={getConfig().SUPPORT_URL_ID_VERIFICATION}
    >
      {intl.formatMessage(messages.idVerificationSupportLink)}
    </Hyperlink>
  );
};

IntlIdVerificationSupportLink.propTypes = {
  intl: intlShape.isRequired,
};

const IntlProfileLink = ({ intl }) => {
  const { username } = getAuthenticatedUser();

  return (
    <Hyperlink
      variant="muted"
      isInline
      destination={`${getConfig().ACCOUNT_PROFILE_URL}/u/${username}`}
    >
      {intl.formatMessage(messages.profileLink)}
    </Hyperlink>
  );
};

IntlProfileLink.propTypes = {
  intl: intlShape.isRequired,
};

const DashboardLink = injectIntl(IntlDashboardLink);
const IdVerificationSupportLink = injectIntl(IntlIdVerificationSupportLink);
const ProfileLink = injectIntl(IntlProfileLink);

export { DashboardLink, IdVerificationSupportLink, ProfileLink };
