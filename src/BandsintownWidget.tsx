import React from 'react'
import { Helmet } from 'react-helmet'
import { bandsintownWidgetInterface } from './types'

export default function TourSection({
  bandsintownWidgetData
}: bandsintownWidgetInterface) {
  return (
    <React.Fragment>
      <Helmet>
        <script
          charSet='utf-8'
          src='https://widget.bandsintown.com/main.min.js'
        />
      </Helmet>

      <a
        className='bit-widget-initializer'
        data-artist-name='dylan wheeler'
        data-display-local-dates='false'
        data-display-past-dates={bandsintownWidgetData.displayPastDates}
        data-auto-style='false'
        data-text-color={bandsintownWidgetData.colorText}
        data-link-color={bandsintownWidgetData.colorLink}
        data-background-color={bandsintownWidgetData.colorBackground}
        data-display-limit={bandsintownWidgetData.displayLimit}
        data-display-start-time={bandsintownWidgetData.displayStartTime}
        data-link-text-color={bandsintownWidgetData.colorLinkText}
        data-display-lineup='false'
        data-display-play-my-city={bandsintownWidgetData.displayPlayMyCity}
        data-separator-color='rgba(124,124,124,0.25)'
      />
    </React.Fragment>
  )
}
