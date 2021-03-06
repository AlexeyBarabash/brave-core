/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const React = require('react')
const cx = require('../../common/classSet')

class siteRemovalNotification extends React.Component {
  componentDidMount () {
    window.i18nTemplate.process(window.document, window.loadTimeData)
  }
  render () {
    const { onUndoIgnoredTopSite, onRestoreAll, onCloseNotification } = this.props
    return <div
      className={cx({
        siteRemovalNotification: true,
        active: true
      })}>
      <span className='notification' i18n-content='thumbRemoved' />
      <span className='siteRemovalAction' onClick={onUndoIgnoredTopSite} i18n-content='undoRemoved' />
      <span className='siteRemovalAction' onClick={onRestoreAll} i18n-content='restoreAll' />
      <button className='fa fa-close' onClick={onCloseNotification} i18n-content='close' />
    </div>
  }
}

module.exports = siteRemovalNotification
