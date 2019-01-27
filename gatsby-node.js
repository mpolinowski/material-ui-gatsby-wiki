const path = require("path");

exports.createPages = ({ graphql, actions }) => {

  const { createPage } = actions
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/index.php/FAQs`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/FAQs/`,
  })

  createRedirect({
    fromPath: `/index.php/Main_Page`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/`,
  })

  createRedirect({
    fromPath: `/index.php/Quick_Installation`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/`,
  })

  createRedirect({
    fromPath: `/index.php/How_does_an_IP-Camera-Network_work%3F`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/How_does_An_IP_Camera_Work/`,
  })

  createRedirect({
    fromPath: `/index.php/Wie_arbeitet_eine_IP_Kamera%3F`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/How_does_An_IP_Camera_Work/`,
  })

  createRedirect({
    fromPath: `/index.php/First_Steps`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/First_Steps/`,
  })

  createRedirect({
    fromPath: `/index.php/Erste_Schritte`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/First_Steps/`,
  })

  createRedirect({
    fromPath: `/index.php/After_unpacking_your_INSTAR_IP_Camera`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/After_Unpacking/`,
  })

  createRedirect({
    fromPath: `/index.php/Nach_dem_Auspacken_Ihrer_IP_Kamera`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/After_Unpacking/`,
  })

  createRedirect({
    fromPath: `/index.php/Direct_LAN_connection_with_your_IP_camera`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Direct_LAN_Connection/`,
  })

  createRedirect({
    fromPath: `/index.php/Direkte_Verbindung_mit_einem_PC_oder_Notebook`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Direct_LAN_Connection/`,
  })

  createRedirect({
    fromPath: `/index.php/Finding_your_IP_camera_in_the_network_if_the_IP_Camera_Tool_is_not_working`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Alternative_IP_Scanner/`,
  })

  createRedirect({
    fromPath: `/index.php/Wie_Sie_Ihrer_IP_Kamera_mit_einem_alternativen_IP_Scanner_finden`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Alternative_IP_Scanner/`,
  })

  createRedirect({
    fromPath: `/index.php/Language_Selection/`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Language_Selection/`,
  })

  createRedirect({
    fromPath: `/index.php/Sprachauswahl_in_der_IP_Kamera/`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Language_Selection/`,
  })

  createRedirect({
    fromPath: `/index.php/ONVIF`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/ONVIF/`,
  })

  createRedirect({
    fromPath: `/index.php/ActiveX_Plugin_Installation_on_Windows`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Live_Video/`,
  })

  createRedirect({
    fromPath: `/index.php/Quicktime_Plugin_Setup`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Live_Video/`,
  })

  createRedirect({
    fromPath: `/index.php/Exception_for_your_IP_camera_in_Avast_Internet_Security`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Live_Video/Troubleshooting/Avast/`,
  })

  createRedirect({
    fromPath: `/index.php/Notwendige_Einstellungen_bei_Avast_Internet_Security`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Live_Video/Troubleshooting/Avast/`,
  })

  createRedirect({
    fromPath: `/index.php/Exception_for_your_IP_camera_in_GDATA_Internet_Security_2016`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Live_Video/Troubleshooting/GDATA/`,
  })

  createRedirect({
    fromPath: `/index.php/`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/`,
  })

  createRedirect({
    fromPath: `/index.php/Notwendige_Einstellungen_in_GDATA_Internet_Security_2016`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Live_Video/Troubleshooting/GDATA/`,
  })

  createRedirect({
    fromPath: `/index.php/Exception_for_your_IP_camera_in_Kaspersky_Internet_Security`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Live_Video/Troubleshooting/Kaspersky_2013/`,
  })

  createRedirect({
    fromPath: `/index.php/Notwendige_Einstellungen_bei_Kaspersky_Internet_Security`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Live_Video/Troubleshooting/Kaspersky_2013/`,
  })

  createRedirect({
    fromPath: `/index.php/Exception_for_your_IP_camera_in_Kaspersky_Internet_Security_2014`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Live_Video/Troubleshooting/Kaspersky_2014/`,
  })

  createRedirect({
    fromPath: `/index.php/Exception_for_your_IP_camera_in_Kaspersky_Internet_Security_2016`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Live_Video/Troubleshooting/Kaspersky_2016/`,
  })

  createRedirect({
    fromPath: `/index.php/Notwendige_Einstellungen_in_Bitdefender_Internet_Security_2017`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Live_Video/Troubleshooting/Kaspersky_2017/`,
  })

  createRedirect({
    fromPath: `/index.php/Exception_for_your_IP_camera_in_AVG_Internet_Security`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Live_Video/Troubleshooting/AVG/`,
  })

  createRedirect({
    fromPath: `/index.php/Notwendige_Einstellungen_bei_AVG_Internet_Security`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Live_Video/Troubleshooting/AVG/`,
  })

  createRedirect({
    fromPath: `/index.php/Exception_for_your_IP_camera_in_AVIRA_Antivirus_Pro`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Live_Video/Troubleshooting/AVIRA/`,
  })

  createRedirect({
    fromPath: `/index.php/Notwendige_Einstellungen_bei_AVIRA_Antivirus_Pro`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Live_Video/Troubleshooting/AVIRA/`,
  })

  createRedirect({
    fromPath: `/index.php/Exception_for_your_IP_camera_in_F-Secure_Internet_Security`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Live_Video/Troubleshooting/F-Secure/`,
  })

  createRedirect({
    fromPath: `/index.php/Notwendige_Einstellungen_bei_F-Secure_Internet_Security`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Live_Video/Troubleshooting/F-Secure/`,
  })

  createRedirect({
    fromPath: `/index.php/Live_Video_in_Microsoft_Edge`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Live_Video/`,
  })

  createRedirect({
    fromPath: `/index.php/Creating_User_Accounts`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Creating_User_Accounts/`,
  })

  createRedirect({
    fromPath: `/index.php/Benutzer_Erstellen_und_Verwalten`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Creating_User_Accounts/`,
  })

  createRedirect({
    fromPath: `/index.php/How_to_upgrade_to_a_new_WebUI_or_Firmware`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/WebUI_And_Firmware_Upgrade/`,
  })

  createRedirect({
    fromPath: `/index.php/How_to_upgrade_to_a_new_WebUI_or_Firmware_(HD_Cameras)`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/WebUI_And_Firmware_Upgrade/HD_Cameras/`,
  })

  createRedirect({
    fromPath: `/index.php/Wie_spiele_ich_eine_neue_WebUI_bzw._Firmware_auf_(HD_Kameras)`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/WebUI_And_Firmware_Upgrade/HD_Cameras/`,
  })

  createRedirect({
    fromPath: `/index.php/How_to_upgrade_to_a_new_WebUI_or_Firmware_(VGA_Cameras)`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/WebUI_And_Firmware_Upgrade/VGA_Cameras/`,
  })

  createRedirect({
    fromPath: `/index.php/Wie_spiele_ich_eine_neue_WebUI_bzw._Firmware_auf_(VGA_Kameras)`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/WebUI_And_Firmware_Upgrade/VGA_Cameras/`,
  })

  createRedirect({
    fromPath: `/index.php/Clear_Browsing_History`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/How_To_Clear_Your_Browsing_History`,
  })

  createRedirect({
    fromPath: `/index.php/Leeren_des_Browser_Verlaufs`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/How_To_Clear_Your_Browsing_History`,
  })

  createRedirect({
    fromPath: `/index.php/First_steps_to_set_up_a_Wifi_connection`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Set_Up_A_Wireless_Connection/`,
  })

  createRedirect({
    fromPath: `/index.php/Wie_stelle_ich_eine_WLAN_Verbindung_her`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Quick_Installation/Set_Up_A_Wireless_Connection/`,
  })

  createRedirect({
    fromPath: `/index.php/Access_over_the_Internet`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Internet_Access/`,
  })

  createRedirect({
    fromPath: `/index.php/Zugriff_über_das_Internet`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Internet_Access/`,
  })

  createRedirect({
    fromPath: `/index.php/The_DDNS_Service`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Internet_Access/The_DDNS_Service/`,
  })

  createRedirect({
    fromPath: `/index.php/Der_DDNS_Service`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Internet_Access/The_DDNS_Service/`,
  })

  createRedirect({
    fromPath: `/index.php/Port_Forwarding`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Internet_Access/Port_Forwarding/`,
  })

  createRedirect({
    fromPath: `/index.php/Portweiterleitung`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Internet_Access/Port_Forwarding/`,
  })

  createRedirect({
    fromPath: `/index.php/AVM_Fritzbox`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Internet_Access/Port_Forwarding/AVM_Fritzbox/`,
  })

  createRedirect({
    fromPath: `/index.php/Telekom_Speedport`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Internet_Access/Port_Forwarding/Telekom_Speedport/`,
  })

  createRedirect({
    fromPath: `/index.php/D-Link`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Internet_Access/Port_Forwarding/D-Link/`,
  })

  createRedirect({
    fromPath: `/index.php/Netgear`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Internet_Access/Port_Forwarding/Netgear/`,
  })

  createRedirect({
    fromPath: `/index.php/Vodafone_Easybox`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Internet_Access/Port_Forwarding/Vodafone_Easybox/`,
  })

  createRedirect({
    fromPath: `/index.php/Pirelli_Router`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Internet_Access/Port_Forwarding/Pirelli/`,
  })

  createRedirect({
    fromPath: `/index.php/Third_Party_DDNS_Addresses`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Internet_Access/DDNS_Provider/`,
  })

  createRedirect({
    fromPath: `/index.php/Drittanbieter_Programme`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Internet_Access/DDNS_Provider/`,
  })

  createRedirect({
    fromPath: `/index.php/Www.noip.com`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Internet_Access/DDNS_Provider/NoIP/`,
  })

  createRedirect({
    fromPath: `/index.php/Www.selfhost.de`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Internet_Access/DDNS_Provider/Selfhost/`,
  })

  createRedirect({
    fromPath: `/index.php/Www.ddnss.de`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Internet_Access/DDNS_Provider/DDNSS/`,
  })

  createRedirect({
    fromPath: `/index.php/Motion_Detection_Setup`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Motion_Detection/Setup/`,
  })

  createRedirect({
    fromPath: `/index.php/Einrichtung_der_Bewegungserkennung`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Motion_Detection/Setup/`,
  })

  createRedirect({
    fromPath: `/index.php/Email%20Setup_/Alarm%20Notification`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Motion_Detection/Alarm_Notification/`,
  })

  createRedirect({
    fromPath: `/index.php/Email_Einstellungen_/_Alarm_Benachrichtigungen`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Motion_Detection/Alarm_Notification/`,
  })

  createRedirect({
    fromPath: `/index.php/Alarm_Recording`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Motion_Detection/Alarm_Recording`,
  })

  createRedirect({
    fromPath: `/index.php/Alarmaufnahme`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Motion_Detection/Alarm_Recording/`,
  })

  createRedirect({
    fromPath: `/index.php/How_to_Access_your_SD_Card`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Motion_Detection/SD_Card_Access/`,
  })

  createRedirect({
    fromPath: `/index.php/Wie_greift_man_auf_die_SD_Karte_zu`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Motion_Detection/SD_Card_Access/`,
  })

  createRedirect({
    fromPath: `/index.php/Alarm_Upload_/_FTP%20Settings`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Motion_Detection/Alarm_FTP_Upload/`,
  })

  createRedirect({
    fromPath: `/index.php/Alarm_Upload_/_FTP_Einstellungen`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Motion_Detection/Alarm_FTP_Upload/`,
  })

  createRedirect({
    fromPath: `/index.php/FTP_Server_Setup`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Motion_Detection/FTP_Server_Setup/`,
  })

  createRedirect({
    fromPath: `/index.php/FTP_Server_Einrichtung`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Motion_Detection/FTP_Server_Setup/`,
  })

  createRedirect({
    fromPath: `/index.php/Router_as_a_FTP_Server`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Motion_Detection/Router_as_a_FTP_Server/`,
  })

  createRedirect({
    fromPath: `/index.php/Nutzen_Sie_Ihren_Router_als_FTP_Server`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Motion_Detection/Router_as_a_FTP_Server/`,
  })

  createRedirect({
    fromPath: `/index.php/Alarm_Server_Function`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Motion_Detection/Alarm_Server/`,
  })

  createRedirect({
    fromPath: `/index.php/Alarm_Server_Funktion`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Motion_Detection/Alarm_Server/`,
  })

  createRedirect({
    fromPath: `/index.php/INSTAR_Cloud`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Motion_Detection/INSTAR_Cloud/`,
  })

  createRedirect({
    fromPath: `/index.php/For_Developers`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Advanced_User/`,
  })

  createRedirect({
    fromPath: `/index.php/Website_Integration`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Advanced_User/Website_Integration/`,
  })

  createRedirect({
    fromPath: `/index.php/Integration_in_eine_Webseite`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Advanced_User/Website_Integration/`,
  })

  createRedirect({
    fromPath: `/index.php/Website_Integration_(HD_Cameras)`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Advanced_User/Website_Integration/HD_Camera_Integration/`,
  })

  createRedirect({
    fromPath: `/index.php/Webseiten_Integration_(HD_Kameras)`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Advanced_User/Website_Integration/HD_Camera_Integration/`,
  })

  createRedirect({
    fromPath: `/index.php/Cambozola_JAVA_Plugin`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Advanced_User/Website_Integration/Cambozola/`,
  })

  createRedirect({
    fromPath: `/index.php/OIPCM`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Advanced_User/Website_Integration/Open_IP_Camera_Manager/`,
  })

  createRedirect({
    fromPath: `/index.php/CGI_Commands`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Advanced_User/CGI_Commands/`,
  })

  createRedirect({
    fromPath: `/index.php/CGI_Befehle`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Advanced_User/CGI_Commands/`,
  })

  createRedirect({
    fromPath: `/index.php/List_of_CGI_commands_(HD)`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/720p_Series_CGI_List/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Kamera_CGI_Liste`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/720p_Series_CGI_List/`,
  })

  createRedirect({
    fromPath: `/index.php/List_of_CGI_commands_(VGA)`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Advanced_User/CGI_Commands/VGA_Series_CGI_List/`,
  })

  createRedirect({
    fromPath: `/index.php/VGA_Kamera_CGI_Liste`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Advanced_User/CGI_Commands/VGA_Series_CGI_List/`,
  })

  createRedirect({
    fromPath: `/index.php/Restore_your_Camera_after_a_faulty_WebUI_Upgrade`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Advanced_User/Restore_WebUI/`,
  })

  createRedirect({
    fromPath: `/index.php/Restore_your_Camera_after_a_faulty_Firmware_Upgrade`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Advanced_User/Restore_Firmware/`,
  })

  createRedirect({
    fromPath: `/index.php/Wiederherstellen_der_Kamera_nach_einem_fehlerhaften_Firmware_Update`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Advanced_User/Restore_Firmware/`,
  })

  createRedirect({
    fromPath: `/index.php/IP_vs_CCTV`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Advanced_User/CCTV_vs_IP/`,
  })

  createRedirect({
    fromPath: `/index.php/Indoor_Cameras`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Indoor_Cameras/`,
  })

  createRedirect({
    fromPath: `/index.php/IP_Innenkameras`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Indoor_Cameras/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-6014`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Indoor_Cameras/IN-6014_HD/`,
  })

  createRedirect({
    fromPath: `/index.php/Usermanual_IN-6014_HD`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Indoor_Cameras/IN-6014_HD/`,
  })

  createRedirect({
    fromPath: `/index.php/Handbuch_IN-6014_HD`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Indoor_Cameras/IN-6014_HD/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-6014_Technical_Specifications`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Indoor_Cameras/IN-6014_HD/Technical_Specifications/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-6014_Technische_Spezifikationen`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Indoor_Cameras/IN-6014_HD/Technical_Specifications/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-6012`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Indoor_Cameras/IN-6012_HD/`,
  })

  createRedirect({
    fromPath: `/index.php/Usermanual_IN-6012_HD`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Indoor_Cameras/IN-6012_HD/`,
  })

  createRedirect({
    fromPath: `/index.php/Handbuch_IN-6012_HD`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Indoor_Cameras/IN-6012_HD/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-6012_Technical_Specifications`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Indoor_Cameras/IN-6012_HD/Technical_Specifications/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-6012_Technische_Spezifikationen`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Indoor_Cameras/IN-6012_HD/Technical_Specifications/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-6001`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Indoor_Cameras/IN-6001_HD/`,
  })

  createRedirect({
    fromPath: `/index.php/Usermanual_IN-6001_HD`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Indoor_Cameras/IN-6001_HD/`,
  })

  createRedirect({
    fromPath: `/index.php/Handbuch_IN-6001_HD`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Indoor_Cameras/IN-6001_HD/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-6001_Technical_Specifications`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Indoor_Cameras/IN-6001_HD/Technical_Specifications/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-6001_Technische_Spezifikationen`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Indoor_Cameras/IN-6001_HD/Technical_Specifications/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-3011`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Indoor_Cameras/IN-3011/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-3011_Technical_Specifications`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Indoor_Cameras/IN-3011/Technical_Specifications/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-3011_Technische_Spezifikationen`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Indoor_Cameras/IN-3011/Technical_Specifications/`,
  })

  createRedirect({
    fromPath: `/index.php/Outdoor_Cameras`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/`,
  })

  createRedirect({
    fromPath: `/index.php/IP_Außenkameras`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-7011`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/IN-7011_HD/`,
  })

  createRedirect({
    fromPath: `/index.php/Usermanual_IN-7011_HD`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/IN-7011_HD/`,
  })

  createRedirect({
    fromPath: `/index.php/Handbuch_IN-7011_HD`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/IN-7011_HD/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-7011_Technical_Specifications`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/IN-7011_HD/Technical_Specifications/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-7011_Technische_Spezifikationen`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/IN-7011_HD/Technical_Specifications/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-5907`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/IN-5907_HD/`,
  })

  createRedirect({
    fromPath: `/index.php/Usermanual_IN-5907_HD`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/IN-5907_HD/`,
  })

  createRedirect({
    fromPath: `/index.php/Handbuch_IN-5907_HD`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/IN-5907_HD/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-5907_Technical_Specifications`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/IN-5907_HD/Technical_Specifications/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-5907_Technische_Spezifikationen`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/IN-5907_HD/Technical_Specifications/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-5905`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/IN-5905_HD/`,
  })

  createRedirect({
    fromPath: `/index.php/Usermanual_IN-5905_HD`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/IN-5905_HD/`,
  })

  createRedirect({
    fromPath: `/index.php/Handbuch_IN-5905_HD`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/IN-5905_HD/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-5905_Technical_Specifications`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/IN-5907_HD/Technical_Specifications/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-5905_Technische_Spezifikationen`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/IN-5907_HD/Technical_Specifications/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-4011`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/IN-4011/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-4011_Technical_Specifications`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/IN-4011/Technical_Specifications/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-4011_Technische_Spezifikationen`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/IN-4011/Technical_Specifications/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-4010`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/IN-4010_V2/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-4010_Technical_Specifications`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/IN-4010_V2/Technical_Specifications/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-4010_Technische_Spezifikationen`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/IN-4010_V2/Technical_Specifications/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-2908`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/IN-2908/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-2908_Technical_Specifications`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/IN-2908/Technical_Specifications/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-2908_Technische_Spezifikationen`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/IN-2908/Technical_Specifications/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-2905`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/IN-2905_V2/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-2905_Technical_Specifications`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/IN-2905_V2/Technical_Specifications/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-2905_Technische_Spezifikationen`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Outdoor_Cameras/IN-2905_V2/Technical_Specifications/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-Lan_500`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Products/IN-LAN/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-PoE_1000`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Products/Power_over_Ethernet/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-Route_P52`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Products/IN-Route/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-Motion_300`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Products/IN-Motion/300/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-Motion_500`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Products/IN-Motion/500/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-Mikro_380`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Products/IN-Mikro/`,
  })

  createRedirect({
    fromPath: `/index.php/IN-90X`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Products/IR_Lighting/`,
  })

  createRedirect({
    fromPath: `/index.php/InstarVision_for_Windows`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/Windows/InstarVision/`,
  })

  createRedirect({
    fromPath: `/index.php/InstarVision_v2_for_Windows`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/Windows/InstarVision/`,
  })

  createRedirect({
    fromPath: `/index.php/InstarVision_for_Windows_Phone`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/Windows/InstarVision/Windows_Phone`,
  })

  createRedirect({
    fromPath: `/index.php/InstarVision_for_Windows_Metro`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/Windows/InstarVision/Metro/`,
  })

  createRedirect({
    fromPath: `/index.php/InstarVision_for_Android`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/Android/InstarVision/`,
  })

  createRedirect({
    fromPath: `/index.php/InstarVision_for_iOS`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/iOS/InstarVision/`,
  })

  createRedirect({
    fromPath: `/index.php/InstarVision_for_Blackberry`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/Other_Platforms/InstarVision_Blackberry/`,
  })

  createRedirect({
    fromPath: `/index.php/ISpy`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/Windows/iSpy`,
  })

  createRedirect({
    fromPath: `/index.php/VLC_Player`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/Windows/VLC_Player/`,
  })

  createRedirect({
    fromPath: `/index.php/Sighthound`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/Windows/Sighthound/`,
  })

  createRedirect({
    fromPath: `/index.php/go1984`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/Windows/go1984/`,
  })

  createRedirect({
    fromPath: `/index.php/WebcamXP`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/Windows/Webcam_XP/`,
  })

  createRedirect({
    fromPath: `/index.php/ZoneTrigger`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/Windows/Zone_Trigger/`,
  })

  createRedirect({
    fromPath: `/index.php/BlueIris`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/Windows/Blue_Iris`,
  })

  createRedirect({
    fromPath: `/index.php/P2P_Client`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/Windows/P2P_Client`,
  })

  createRedirect({
    fromPath: `/index.php/VLC_Player_MacOSX`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/macOS/VLC_Player`,
  })

  createRedirect({
    fromPath: `/index.php/Sighthound_MacOSX`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/macOS/Sighthound/`,
  })

  createRedirect({
    fromPath: `/index.php/EvoCam`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/macOS/EvoCam/`,
  })

  createRedirect({
    fromPath: `/index.php/SecuritySpy`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/macOS/SecuritySpy/`,
  })

  createRedirect({
    fromPath: `/index.php/TinyCam_Monitor`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/Android/TinyCam_Monitor/`,
  })

  createRedirect({
    fromPath: `/index.php/IP_Cam_Viewer`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/Android/IP_Cam_Viewer/`,
  })

  createRedirect({
    fromPath: `/index.php/LiveCams`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/iOS/LiveCams/`,
  })

  createRedirect({
    fromPath: `/index.php/IP_Vision_Pro`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/iOS/IP_Vision_Pro/`,
  })

  createRedirect({
    fromPath: `/index.php/ICCAM`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/iOS/ICCAM/`,
  })

  createRedirect({
    fromPath: `/index.php/IP_Cam_Viewer_for_iOS`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/iOS/IP_Cam_Viewer/`,
  })

  createRedirect({
    fromPath: `/index.php/P2P_Cam_Live`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/iOS/P2P_Cam_Live/`,
  })

  createRedirect({
    fromPath: `/index.php/QNAP_Surveillance_Station`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/Other_Platforms/QNAP/`,
  })

  createRedirect({
    fromPath: `/index.php/Synology_Surveillance_Station`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Software/Other_Platforms/Synology/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Software`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Software/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Software`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Software/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Software_Language`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Software/Language/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Software_Language`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Software/Language/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Software_Reboot`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Software/Reboot_Reset/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Software_Neustart`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Software/Reboot_Reset/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Software_Backup`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Software/Backup/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Software_Sicherung`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Software/Backup/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Software_Update`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Software/Update/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Software_Update`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Software/Update/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Network`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Network/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Netzwerk`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Network/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Network_IP_Configuration`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Network/IP_Configuration/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Netzwerk_IP_Konfiguration`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Network/IP_Configuration/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Network_WiFi`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Network/WiFi/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Netzwerk_WLAN`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Network/WiFi/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Network_DDNS`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Network/DDNS/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Netzwerk_DDNS`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Network/DDNS/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Network_P2P`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Network/P2P/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Netzwerk_P2P`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Network/P2P/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Network_UPnP`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Network/UPnP/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Netzwerk_UPnP`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Network/UPnP/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Network_Push_Service`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Network/Push_Service/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Netzwerk_Push_Dienst`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Network/Push_Service/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_System`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/System/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_System`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/System/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_System_Info`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/System/Info/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_System_Info`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/System/Info/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_System_Date-Time`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/System/Date_Time/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_System_Datum_Uhrzeit`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/System/Date_Time/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_System_User`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/System/User/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_System_Benutzer`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/System/User/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_System_Status_LED`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/System/Status_LED/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_System_Status_LED`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/System/Status_LED/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_System_IR_LEDs`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/System/IR_LED/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_System_IR_LEDs`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/System/IR_LED/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_System_ONVIF`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/System/ONVIF/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_System_ONVIF`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/System/ONVIF/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_System_PTZ`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/System/PTZ/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_System_PTZ`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/System/PTZ/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_System_PTZ_Tour`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/System/PTZ_Tour/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_System_PTZ_Tour`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/System/PTZ_Tour/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_System_Log`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/System/System_Log/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_System_Logbuch`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/System/System_Log/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Multimedia`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Multimedia/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Multimedia`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Multimedia/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Multimedia_Audio`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Multimedia/Audio/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Multimedia_Audio`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Multimedia/Audio/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Multimedia_Video`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Multimedia/Video/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Multimedia_Video`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Multimedia/Video/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Multimedia_Image`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Multimedia/Image/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Multimedia_Bild`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Multimedia/Image/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Alarm`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Alarm/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Alarm`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Alarm/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Alarm_Areas`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Alarm/Areas/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Alarm_Bereiche`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Alarm/Areas/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Alarm_Privacy_Mask`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Alarm/Privacy_Mask/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Alarm_Privatsphäre`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Alarm/Privacy_Mask/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Alarm_Actions`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Alarm/Actions/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Alarm_Aktionen`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Alarm/Actions/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Alarm_Schedule`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Alarm/Schedule/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Alarm_Zeitplan`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Alarm/Schedule/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Alarm_SMTP_Server`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Alarm/SMTP_Server/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Alarm_SMTP_Server`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Alarm/SMTP_Server/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Alarm_EMAIL`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Alarm/Email/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Alarm_EMAIL`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Alarm/Email/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Alarm_FTP`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Alarm/FTP/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Alarm_FTP`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Alarm/FTP/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Alarm_Audio_Alarm`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Alarm/Audio_Alarm/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Alarm_Audio_Alarm`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Alarm/Audio_Alarm/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Alarm_SD_Card`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Alarm/SD_Card/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Alarm_SD_Karte`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Alarm/SD_Card/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Recording`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Recording/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Aufnahme`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Recording/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Recording_Schedule`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Recording/Schedule/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Aufnahme_Zeitplan`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Recording/Schedule/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Recording_Video`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Recording/Video/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Aufnahme_Video`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Recording/Video/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Recording_Photoseries`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Recording/Photoseries/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Aufnahme_Fotoserie`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Recording/Photoseries/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Menu_Bar`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Menu_Bar/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Menüleiste`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Menu_Bar/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_Video_Menu_Bar`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Video_Menu_Bar/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_Video_Menüleiste`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/Video_Menu_Bar/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Manual_WebUI_PTZ_Control`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/PTZ_Control/`,
  })

  createRedirect({
    fromPath: `/index.php/HD_Handbuch_Weboberfläche_PTZ_Kontrolle`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/Web_User_Interface/720p_Series/PTZ_Control/`,
  })

  const blogPostTemplate = path.resolve(`src/templates/markdownPages.jsx`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: blogPostTemplate,
          context: {}, // additional data can be passed via context
        });
      });
    });
};