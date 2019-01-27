import React from 'react'

import SEOHelmet from '../components/Layout/SEOHelmet'
import SearchTable from '../components/Index/SearchResultTable'

const seodata = {
  title: 'INSTAR Wiki :: Knowledgebase for IP Cameras and Network Surveillance',
  description: 'INSTAR is one of the best-known brands of high quality security technology developed in Germany. INSTAR offers indoor / outdoor IP cameras / surveillance cameras and also offers a unique cloud capture platform including false alarms and object detection. All INSTAR cameras are & quot; not & quot; Cloud-bound and can be integrated easily without Internet in the local network via LAN, WLAN or PoE. No matter which surveillance camera of INSTAR you use, all cameras are compatible with third-party systems such as. Synology, QNAP, Asustor, Netgear, Luxone, KNX, Homeatic and many more. As a supplier of WLAN network cameras, HD IP cameras, controllable IP cameras, IP cameras with infrared night vision as well as PoE injectors, Gigabit PoE injectors, Powerline adapters, routers, switches, motion detectors with PIR and microwaves, microphones, lenses, a patented heater, INSTAR also offers additional accessories for your IP surveillance camera.',
  image: '/images/Search/QI_SearchThumb_SetupWizard.png'
};

export default (props) => (
  <React.Fragment>
    <SEOHelmet title={seodata.title} description={seodata.description} image={seodata.image} location={props.location.pathname} />
    <SearchTable />
  </React.Fragment>
)