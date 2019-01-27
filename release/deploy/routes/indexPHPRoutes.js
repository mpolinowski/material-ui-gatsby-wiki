var express = require('express');
var indexPHPRouter = express.Router();

indexPHPRouter.route('/Main_Page')
  .get(function(req, res) {
    res.status(301).redirect('/');
});

/* ########################################## Quick_Installation ########################################## */

indexPHPRouter.route('/Quick_Installation')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation');
});

indexPHPRouter.route('/How_does_an_IP-Camera-Network_work%3F')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/How_Does_An_IP_Camera_Work');
});

indexPHPRouter.route('/Wie_arbeitet_eine_IP_Kamera%3F')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/How_Does_An_IP_Camera_Work');
});

indexPHPRouter.route('/First_Steps')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/First_Steps');
});

indexPHPRouter.route('/Erste_Schritte')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/First_Steps');
});

indexPHPRouter.route('/After_unpacking_your_INSTAR_IP_Camera')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/After_Unpacking');
});

indexPHPRouter.route('/Nach_dem_Auspacken_Ihrer_IP_Kamera')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/After_Unpacking');
});

indexPHPRouter.route('/Direct_LAN_connection_with_your_IP_camera')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Direct_LAN_Connection');
});

indexPHPRouter.route('/Direkte_Verbindung_mit_einem_PC_oder_Notebook')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Direct_LAN_Connection');
});

indexPHPRouter.route('/Finding_your_IP_camera_in_the_network_if_the_IP_Camera_Tool_is_not_working')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Alternative_IP_Scanner');
});

indexPHPRouter.route('/Wie_Sie_Ihrer_IP_Kamera_mit_einem_alternativen_IP_Scanner_finden')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Alternative_IP_Scanner');
});

indexPHPRouter.route('/Language_Selection/')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Language_Selection');
});

indexPHPRouter.route('/Sprachauswahl_in_der_IP_Kamera/')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Language_Selection');
});

indexPHPRouter.route('/ONVIF')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/ONVIF');
});

indexPHPRouter.route('/ActiveX_Plugin_Installation_on_Windows')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Live_Video');
});

indexPHPRouter.route('/Quicktime_Plugin_Setup')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Live_Video');
});

indexPHPRouter.route('/Exception_for_your_IP_camera_in_Avast_Internet_Security')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Live_Video/Troubleshooting/Avast');
});

indexPHPRouter.route('/Notwendige_Einstellungen_bei_Avast_Internet_Security')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Live_Video/Troubleshooting/Avast');
});

indexPHPRouter.route('/Exception_for_your_IP_camera_in_GDATA_Internet_Security_2016')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Live_Video/Troubleshooting/GDATA');
});

indexPHPRouter.route('/Notwendige_Einstellungen_in_GDATA_Internet_Security_2016')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Live_Video/Troubleshooting/GDATA');
});

indexPHPRouter.route('/Exception_for_your_IP_camera_in_Kaspersky_Internet_Security')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Live_Video/Troubleshooting/Kaspersky_2013');
});

indexPHPRouter.route('/Notwendige_Einstellungen_bei_Kaspersky_Internet_Security')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Live_Video/Troubleshooting/Kaspersky_2013');
});

indexPHPRouter.route('/Exception_for_your_IP_camera_in_Kaspersky_Internet_Security_2014')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Live_Video/Troubleshooting/Kaspersky_2014');
});

indexPHPRouter.route('/Notwendige_Einstellungen_bei_Kaspersky_Internet_Security_2014')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Live_Video/Troubleshooting/Kaspersky_2014');
});

indexPHPRouter.route('/Exception_for_your_IP_camera_in_Kaspersky_Internet_Security_2016')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Live_Video/Troubleshooting/Kaspersky_2016');
});

indexPHPRouter.route('/Notwendige_Einstellungen_in_Bitdefender_Internet_Security_2017')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Live_Video/Troubleshooting/Kaspersky_2017');
});

indexPHPRouter.route('/Exception_for_your_IP_camera_in_AVG_Internet_Security')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Live_Video/Troubleshooting/AVG');
});

indexPHPRouter.route('/Notwendige_Einstellungen_bei_AVG_Internet_Security')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Live_Video/Troubleshooting/AVG');
});

indexPHPRouter.route('/Exception_for_your_IP_camera_in_AVIRA_Antivirus_Pro')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Live_Video/Troubleshooting/AVIRA');
});

indexPHPRouter.route('/Notwendige_Einstellungen_bei_AVIRA_Antivirus_Pro')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Live_Video/Troubleshooting/AVIRA');
});

indexPHPRouter.route('/Exception_for_your_IP_camera_in_F-Secure_Internet_Security')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Live_Video/Troubleshooting/F-Secure');
});

indexPHPRouter.route('/Notwendige_Einstellungen_bei_F-Secure_Internet_Security')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Live_Video/Troubleshooting/F-Secure');
});

indexPHPRouter.route('/Live_Video_in_Microsoft_Edge')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Live_Video');
});

indexPHPRouter.route('/Creating_User_Accounts')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Creating_User_Accounts');
});

indexPHPRouter.route('/Benutzer_Erstellen_und_Verwalten')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Creating_User_Accounts');
});

indexPHPRouter.route('/How_to_upgrade_to_a_new_WebUI_or_Firmware')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/WebUI_And_Firmware_Upgrade');
});

indexPHPRouter.route('/How_to_upgrade_to_a_new_WebUI_or_Firmware_(HD_Cameras)')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/WebUI_And_Firmware_Upgrade/HD_Cameras');
});

indexPHPRouter.route('/Wie_spiele_ich_eine_neue_WebUI_bzw._Firmware_auf_(HD_Kameras)')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/WebUI_And_Firmware_Upgrade/HD_Cameras');
});

indexPHPRouter.route('/How_to_upgrade_to_a_new_WebUI_or_Firmware_(VGA_Cameras)')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/WebUI_And_Firmware_Upgrade/VGA_Cameras');
});

indexPHPRouter.route('/Wie_spiele_ich_eine_neue_WebUI_bzw._Firmware_auf_(VGA_Kameras)')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/WebUI_And_Firmware_Upgrade/VGA_Cameras');
});

indexPHPRouter.route('/Clear_Browsing_History')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/How_To_Clear_Your_Browsing_History');
});

indexPHPRouter.route('/Leeren_des_Browser_Verlaufs')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/How_To_Clear_Your_Browsing_History');
});

indexPHPRouter.route('/First_steps_to_set_up_a_Wifi_connection')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Set_Up_A_Wireless_Connection');
});

indexPHPRouter.route('/Wie_stelle_ich_eine_WLAN_Verbindung_her')
  .get(function(req, res) {
    res.status(301).redirect('/Quick_Installation/Set_Up_A_Wireless_Connection');
});



/* ########################################## Internet_Access ########################################## */

indexPHPRouter.route('/Access_over_the_Internet')
  .get(function(req, res) {
    res.status(301).redirect('/Internet_Access');
});

indexPHPRouter.route('/Zugriff_über_das_Internet')
  .get(function(req, res) {
    res.status(301).redirect('/Internet_Access');
});

indexPHPRouter.route('/The_DDNS_Service')
  .get(function(req, res) {
    res.status(301).redirect('/Internet_Access/The_DDNS_Service');
});

indexPHPRouter.route('/Der_DDNS_Service')
  .get(function(req, res) {
    res.status(301).redirect('/Internet_Access/The_DDNS_Service');
});

indexPHPRouter.route('/Port_Forwarding')
  .get(function(req, res) {
    res.status(301).redirect('/Internet_Access/Port_Forwarding');
});

indexPHPRouter.route('/Portweiterleitung')
  .get(function(req, res) {
    res.status(301).redirect('/Internet_Access/Port_Forwarding');
});

indexPHPRouter.route('/AVM_Fritzbox')
  .get(function(req, res) {
    res.status(301).redirect('/Internet_Access/Port_Forwarding/AVM_Fritzbox');
});

indexPHPRouter.route('/AVM_Fritzbox')
  .get(function(req, res) {
    res.status(301).redirect('/Internet_Access/Port_Forwarding/AVM_Fritzbox');
});


indexPHPRouter.route('/Telekom_Speedport')
  .get(function(req, res) {
    res.status(301).redirect('/Internet_Access/Port_Forwarding/Telekom_Speedport');
});

indexPHPRouter.route('/D-Link')
  .get(function(req, res) {
    res.status(301).redirect('/Internet_Access/Port_Forwarding/D-Link');
});

indexPHPRouter.route('/Netgear')
  .get(function(req, res) {
    res.status(301).redirect('/Internet_Access/Port_Forwarding/Netgear');
});

indexPHPRouter.route('/Vodafone_Easybox')
  .get(function(req, res) {
    res.status(301).redirect('/Internet_Access/Port_Forwarding/Vodafone_Easybox');
});

indexPHPRouter.route('/Pirelli_Router')
  .get(function(req, res) {
    res.status(301).redirect('/Internet_Access/Port_Forwarding/Pirelli');
});

indexPHPRouter.route('/Third_Party_DDNS_Addresses')
  .get(function(req, res) {
    res.status(301).redirect('/Internet_Access/DDNS_Provider');
});

indexPHPRouter.route('/Drittanbieter_Programme')
  .get(function(req, res) {
    res.status(301).redirect('/Internet_Access/DDNS_Provider');
});

indexPHPRouter.route('/Www.noip.com')
  .get(function(req, res) {
    res.status(301).redirect('/Internet_Access/DDNS_Provider/NoIP');
});

indexPHPRouter.route('/Www.selfhost.de')
  .get(function(req, res) {
    res.status(301).redirect('/Internet_Access/DDNS_Provider/Selfhost');
});

indexPHPRouter.route('/Www.ddnss.de')
  .get(function(req, res) {
    res.status(301).redirect('/Internet_Access/DDNS_Provider/DDNSS');
});



/* ########################################## Motion_Detection ########################################## */

indexPHPRouter.route('/Motion_Detection_Setup')
  .get(function(req, res) {
    res.status(301).redirect('/Motion_Detection/Setup');
});

indexPHPRouter.route('/Einrichtung_der_Bewegungserkennung')
  .get(function(req, res) {
    res.status(301).redirect('/Motion_Detection/Setup');
});

indexPHPRouter.route('/Email%20Setup_/Alarm%20Notification')
  .get(function(req, res) {
    res.status(301).redirect('/Motion_Detection/Alarm_Notification');
});

indexPHPRouter.route('/Email_Einstellungen_/_Alarm_Benachrichtigungen')
  .get(function(req, res) {
    res.status(301).redirect('/Motion_Detection/Alarm_Notification');
});

indexPHPRouter.route('/Alarm_Recording')
  .get(function(req, res) {
    res.status(301).redirect('/Motion_Detection/Alarm_Recording');
});

indexPHPRouter.route('/Alarmaufnahme')
  .get(function(req, res) {
    res.status(301).redirect('/Motion_Detection/Alarm_Recording');
});

indexPHPRouter.route('/How_to_Access_your_SD_Card')
  .get(function(req, res) {
    res.status(301).redirect('/Motion_Detection/SD_Card_Access');
});

indexPHPRouter.route('/Wie_greift_man_auf_die_SD_Karte_zu')
  .get(function(req, res) {
    res.status(301).redirect('/Motion_Detection/SD_Card_Access');
});

indexPHPRouter.route('/Alarm_Upload_/_FTP%20Settings')
  .get(function(req, res) {
    res.status(301).redirect('/Motion_Detection/Alarm_FTP_Upload');
});

indexPHPRouter.route('/Alarm_Upload_/_FTP_Einstellungen')
  .get(function(req, res) {
    res.status(301).redirect('/Motion_Detection/Alarm_FTP_Upload');
});

indexPHPRouter.route('/FTP_Server_Setup')
  .get(function(req, res) {
    res.status(301).redirect('/Motion_Detection/FTP_Server_Setup');
});

indexPHPRouter.route('/FTP_Server_Einrichtung')
  .get(function(req, res) {
    res.status(301).redirect('/Motion_Detection/FTP_Server_Setup');
});

indexPHPRouter.route('/Router_as_a_FTP_Server')
  .get(function(req, res) {
    res.status(301).redirect('/Motion_Detection/Router_as_a_FTP_Server');
});

indexPHPRouter.route('/Nutzen_Sie_Ihren_Router_als_FTP_Server')
  .get(function(req, res) {
    res.status(301).redirect('/Motion_Detection/Router_as_a_FTP_Server');
});

indexPHPRouter.route('/Alarm_Server_Function')
  .get(function(req, res) {
    res.status(301).redirect('/Motion_Detection/Alarm_Server');
});

indexPHPRouter.route('/Alarm_Server_Funktion')
  .get(function(req, res) {
    res.status(301).redirect('/Motion_Detection/Alarm_Server');
});

indexPHPRouter.route('/INSTAR_Cloud')
  .get(function(req, res) {
    res.status(301).redirect('/Motion_Detection/INSTAR_Cloud');
});



/* ########################################## For Developers ########################################## */

indexPHPRouter.route('/For_Developers')
  .get(function(req, res) {
    res.status(301).redirect('/Advanced_User');
});

indexPHPRouter.route('/Website_Integration')
  .get(function(req, res) {
    res.status(301).redirect('/Advanced_User/Website_Integration');
});

indexPHPRouter.route('/Integration_in_eine_Webseite')
  .get(function(req, res) {
    res.status(301).redirect('/Advanced_User/Website_Integration');
});

indexPHPRouter.route('/Website_Integration_(HD_Cameras)')
  .get(function(req, res) {
    res.status(301).redirect('/Advanced_User/Website_Integration/HD_Camera_Integration');
});

indexPHPRouter.route('/Webseiten_Integration_(HD_Kameras)')
  .get(function(req, res) {
    res.status(301).redirect('/Advanced_User/Website_Integration/HD_Camera_Integration');
});

indexPHPRouter.route('/Cambozola_JAVA_Plugin')
  .get(function(req, res) {
    res.status(301).redirect('/Advanced_User/Website_Integration/Cambozola');
});

indexPHPRouter.route('/OIPCM')
  .get(function(req, res) {
    res.status(301).redirect('/Advanced_User/Website_Integration/Open_IP_Camera_Manager');
});

indexPHPRouter.route('/CGI_Commands')
  .get(function(req, res) {
    res.status(301).redirect('/Advanced_User/CGI_Commands');
});

indexPHPRouter.route('/CGI_Befehle')
  .get(function(req, res) {
    res.status(301).redirect('/Advanced_User/CGI_Commands');
});

indexPHPRouter.route('/List_of_CGI_commands_(HD)')
  .get(function(req, res) {
    res.status(301).redirect('/720p_Series_CGI_List/');
});

indexPHPRouter.route('/HD_Kamera_CGI_Liste')
  .get(function(req, res) {
    res.status(301).redirect('/720p_Series_CGI_List/');
});

indexPHPRouter.route('/List_of_CGI_commands_(VGA)')
  .get(function(req, res) {
    res.status(301).redirect('/Advanced_User/CGI_Commands/VGA_Series_CGI_List/');
});

indexPHPRouter.route('/VGA_Kamera_CGI_Liste')
  .get(function(req, res) {
    res.status(301).redirect('/Advanced_User/CGI_Commands/VGA_Series_CGI_List/');
});

indexPHPRouter.route('/Restore_your_Camera_after_a_faulty_WebUI_Upgrade')
  .get(function(req, res) {
    res.status(301).redirect('/Advanced_User/Restore_WebUI');
});

indexPHPRouter.route('/Restore_your_Camera_after_a_faulty_Firmware_Upgrade')
  .get(function(req, res) {
    res.status(301).redirect('/Advanced_User/Restore_Firmware');
});

indexPHPRouter.route('/Wiederherstellen_der_Kamera_nach_einem_fehlerhaften_Firmware_Update')
  .get(function(req, res) {
    res.status(301).redirect('/Advanced_User/Restore_Firmware');
});

indexPHPRouter.route('/IP_vs_CCTV')
  .get(function(req, res) {
    res.status(301).redirect('/Advanced_User/CCTV_vs_IP');
});


/* ########################################## Products Indoor Cameras ########################################## */

indexPHPRouter.route('/Indoor_Cameras')
  .get(function(req, res) {
    res.status(301).redirect('/Indoor_Cameras/');
});

indexPHPRouter.route('/IP_Innenkameras')
  .get(function(req, res) {
    res.status(301).redirect('/Indoor_Cameras/');
});

indexPHPRouter.route('/IN-6014')
  .get(function(req, res) {
    res.status(301).redirect('/Indoor_Cameras/IN-6014_HD');
});

indexPHPRouter.route('/Usermanual_IN-6014_HD')
  .get(function(req, res) {
    res.status(301).redirect('/Indoor_Cameras/IN-6014_HD');
});

indexPHPRouter.route('/Handbuch_IN-6014_HD')
  .get(function(req, res) {
    res.status(301).redirect('/Indoor_Cameras/IN-6014_HD');
});

indexPHPRouter.route('/IN-6014_Technical_Specifications')
  .get(function(req, res) {
    res.status(301).redirect('/Indoor_Cameras/IN-6014_HD/Technical_Specifications/');
});

indexPHPRouter.route('/IN-6014_Technische_Spezifikationen')
  .get(function(req, res) {
    res.status(301).redirect('/Indoor_Cameras/IN-6014_HD/Technical_Specifications/');
});

indexPHPRouter.route('/IN-6012')
  .get(function(req, res) {
    res.status(301).redirect('/Indoor_Cameras/IN-6012_HD');
});

indexPHPRouter.route('/Usermanual_IN-6012_HD')
  .get(function(req, res) {
    res.status(301).redirect('/Indoor_Cameras/IN-6012_HD');
});

indexPHPRouter.route('/Handbuch_IN-6012_HD')
  .get(function(req, res) {
    res.status(301).redirect('/Indoor_Cameras/IN-6012_HD');
});

indexPHPRouter.route('/IN-6012_Technical_Specifications')
  .get(function(req, res) {
    res.status(301).redirect('/Indoor_Cameras/IN-6012_HD/Technical_Specifications/');
});

indexPHPRouter.route('/IN-6012_Technische_Spezifikationen')
  .get(function(req, res) {
    res.status(301).redirect('/Indoor_Cameras/IN-6012_HD/Technical_Specifications/');
});


indexPHPRouter.route('/IN-6001')
  .get(function(req, res) {
    res.status(301).redirect('/Indoor_Cameras/IN-6001_HD');
});

indexPHPRouter.route('/Usermanual_IN-6001_HD')
  .get(function(req, res) {
    res.status(301).redirect('/Indoor_Cameras/IN-6001_HD');
});

indexPHPRouter.route('/Handbuch_IN-6001_HD')
  .get(function(req, res) {
    res.status(301).redirect('/Indoor_Cameras/IN-6001_HD');
});

indexPHPRouter.route('/IN-6001_Technical_Specifications')
  .get(function(req, res) {
    res.status(301).redirect('/Indoor_Cameras/IN-6001_HD/Technical_Specifications/');
});

indexPHPRouter.route('/IN-6001_Technische_Spezifikationen')
  .get(function(req, res) {
    res.status(301).redirect('/Indoor_Cameras/IN-6001_HD/Technical_Specifications/');
});

indexPHPRouter.route('/IN-3011')
  .get(function(req, res) {
    res.status(301).redirect('/Indoor_Cameras/IN-3011');
});

indexPHPRouter.route('/IN-3011_Technical_Specifications')
  .get(function(req, res) {
    res.status(301).redirect('/Indoor_Cameras/IN-3011/Technical_Specifications/');
});

indexPHPRouter.route('/IN-3011_Technische_Spezifikationen')
  .get(function(req, res) {
    res.status(301).redirect('/Indoor_Cameras/IN-3011/Technical_Specifications/');
});



/* ########################################## Products Outdoor Cameras ########################################## */

indexPHPRouter.route('/Outdoor_Cameras')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/');
});

indexPHPRouter.route('/IP_Außenkameras')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/');
});

indexPHPRouter.route('/IN-7011')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/IN-7011_HD');
});

indexPHPRouter.route('/Usermanual_IN-7011_HD')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/IN-7011_HD');
});

indexPHPRouter.route('/Handbuch_IN-7011_HD')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/IN-7011_HD');
});

indexPHPRouter.route('/IN-7011_Technical_Specifications')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/IN-7011_HD/Technical_Specifications/');
});

indexPHPRouter.route('/IN-7011_Technische_Spezifikationen')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/IN-7011_HD/Technical_Specifications/');
});

indexPHPRouter.route('/IN-5907')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/IN-5907_HD');
});

indexPHPRouter.route('/Usermanual_IN-5907_HD')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/IN-5907_HD');
});

indexPHPRouter.route('/Handbuch_IN-5907_HD')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/IN-5907_HD');
});

indexPHPRouter.route('/IN-5907_Technical_Specifications')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/IN-5907_HD/Technical_Specifications/');
});

indexPHPRouter.route('/IN-5907_Technische_Spezifikationen')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/IN-5907_HD/Technical_Specifications/');
});

indexPHPRouter.route('/IN-5905')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/IN-5905_HD');
});

indexPHPRouter.route('/Usermanual_IN-5905_HD')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/IN-5905_HD');
});

indexPHPRouter.route('/Handbuch_IN-5905_HD')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/IN-5905_HD');
});

indexPHPRouter.route('/IN-5905_Technical_Specifications')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/IN-5907_HD/Technical_Specifications/');
});

indexPHPRouter.route('/IN-5905_Technische_Spezifikationen')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/IN-5907_HD/Technical_Specifications/');
});

indexPHPRouter.route('/IN-4011')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/IN-4011');
});

indexPHPRouter.route('/IN-4011_Technical_Specifications')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/IN-4011/Technical_Specifications/');
});

indexPHPRouter.route('/IN-4011_Technische_Spezifikationen')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/IN-4011/Technical_Specifications/');
});

indexPHPRouter.route('/IN-4010')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/IN-4010_V2');
});

indexPHPRouter.route('/IN-4010_Technical_Specifications')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/IN-4010_V2/Technical_Specifications/');
});

indexPHPRouter.route('/IN-4010_Technische_Spezifikationen')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/IN-4010_V2/Technical_Specifications/');
});

indexPHPRouter.route('/IN-2908')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/IN-2908');
});

indexPHPRouter.route('/IN-2908_Technical_Specifications')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/IN-2908/Technical_Specifications/');
});

indexPHPRouter.route('/IN-2908_Technische_Spezifikationen')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/IN-2908/Technical_Specifications/');
});

indexPHPRouter.route('/IN-2905')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/IN-2905_V2');
});

indexPHPRouter.route('/IN-2905_Technical_Specifications')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/IN-2905_V2/Technical_Specifications/');
});

indexPHPRouter.route('/IN-2905_Technische_Spezifikationen')
  .get(function(req, res) {
    res.status(301).redirect('/Outdoor_Cameras/IN-2905_V2/Technical_Specifications/');
});



/* ########################################## Products Accessories ########################################## */

indexPHPRouter.route('/IN-Lan_500')
  .get(function(req, res) {
    res.status(301).redirect('/Products/IN-LAN');
});

indexPHPRouter.route('/IN-PoE_1000')
  .get(function(req, res) {
    res.status(301).redirect('/Products/Power_over_Ethernet');
});

indexPHPRouter.route('/IN-Route_P52')
  .get(function(req, res) {
    res.status(301).redirect('/Products/IN-Route');
});

indexPHPRouter.route('/IN-Motion_300')
  .get(function(req, res) {
    res.status(301).redirect('/Products/IN-Motion/300');
});

indexPHPRouter.route('/IN-Motion_500')
  .get(function(req, res) {
    res.status(301).redirect('/Products/IN-Motion/500');
});

indexPHPRouter.route('/IN-Mikro_380')
  .get(function(req, res) {
    res.status(301).redirect('/Products/IN-Mikro');
});

indexPHPRouter.route('/IN-90X')
  .get(function(req, res) {
    res.status(301).redirect('/Products/IR_Lighting');
});



/* ########################################## Products Software ########################################## */

indexPHPRouter.route('/InstarVision_for_Windows')
  .get(function(req, res) {
    res.status(301).redirect('/Software/Windows/InstarVision');
});

indexPHPRouter.route('/InstarVision_v2_for_Windows')
  .get(function(req, res) {
    res.status(301).redirect('/Software/Windows/InstarVision');
});

indexPHPRouter.route('/InstarVision_for_Windows_Phone')
  .get(function(req, res) {
    res.status(301).redirect('/Software/Windows/InstarVision/Windows_Phone');
});

indexPHPRouter.route('/InstarVision_for_Windows_Metro')
  .get(function(req, res) {
    res.status(301).redirect('/Software/Windows/InstarVision/Metro');
});

indexPHPRouter.route('/InstarVision_for_Android')
  .get(function(req, res) {
    res.status(301).redirect('/Software/Android/InstarVision');
});

indexPHPRouter.route('/InstarVision_for_iOS')
  .get(function(req, res) {
    res.status(301).redirect('/Software/iOS/InstarVision');
});

indexPHPRouter.route('/InstarVision_for_Blackberry')
  .get(function(req, res) {
    res.status(301).redirect('/Software/Other_Platforms/InstarVision_Blackberry');
});

indexPHPRouter.route('/ISpy')
  .get(function(req, res) {
    res.status(301).redirect('/Software/Windows/iSpy');
});

indexPHPRouter.route('/VLC_Player')
  .get(function(req, res) {
    res.status(301).redirect('/Software/Windows/VLC_Player');
});

indexPHPRouter.route('/Sighthound')
  .get(function(req, res) {
    res.status(301).redirect('/Software/Windows/Sighthound');
});

indexPHPRouter.route('/go1984')
  .get(function(req, res) {
    res.status(301).redirect('/Software/Windows/go1984');
});

indexPHPRouter.route('/WebcamXP')
  .get(function(req, res) {
    res.status(301).redirect('/Software/Windows/Webcam_XP');
});

indexPHPRouter.route('/ZoneTrigger')
  .get(function(req, res) {
    res.status(301).redirect('/Software/Windows/Zone_Trigger');
});

indexPHPRouter.route('/BlueIris')
  .get(function(req, res) {
    res.status(301).redirect('/Software/Windows/Blue_Iris');
});

indexPHPRouter.route('/P2P_Client')
  .get(function(req, res) {
    res.status(301).redirect('/Software/Windows/P2P_Client');
});

indexPHPRouter.route('/VLC_Player_MacOSX')
  .get(function(req, res) {
    res.status(301).redirect('/Software/macOS/VLC_Player');
});

indexPHPRouter.route('/Sighthound_MacOSX')
  .get(function(req, res) {
    res.status(301).redirect('/Software/macOS/Sighthound');
});

indexPHPRouter.route('/EvoCam')
  .get(function(req, res) {
    res.status(301).redirect('/Software/macOS/EvoCam');
});

indexPHPRouter.route('/SecuritySpy')
  .get(function(req, res) {
    res.status(301).redirect('/Software/macOS/SecuritySpy');
});

indexPHPRouter.route('/TinyCam_Monitor')
  .get(function(req, res) {
    res.status(301).redirect('/Software/Android/TinyCam_Monitor');
});

indexPHPRouter.route('/IP_Cam_Viewer')
  .get(function(req, res) {
    res.status(301).redirect('/Software/Android/IP_Cam_Viewer');
});

indexPHPRouter.route('/LiveCams')
  .get(function(req, res) {
    res.status(301).redirect('/Software/iOS/LiveCams');
});

indexPHPRouter.route('/IP_Vision_Pro')
  .get(function(req, res) {
    res.status(301).redirect('/Software/iOS/IP_Vision_Pro');
});

indexPHPRouter.route('/ICCAM')
  .get(function(req, res) {
    res.status(301).redirect('/Software/iOS/ICCAM');
});

indexPHPRouter.route('/IP_Cam_Viewer_for_iOS')
  .get(function(req, res) {
    res.status(301).redirect('/Software/iOS/IP_Cam_Viewer');
});

indexPHPRouter.route('/P2P_Cam_Live')
  .get(function(req, res) {
    res.status(301).redirect('/Software/iOS/P2P_Cam_Live');
});

indexPHPRouter.route('/QNAP_Surveillance_Station')
  .get(function(req, res) {
    res.status(301).redirect('/Software/Other_Platforms/QNAP');
});

indexPHPRouter.route('/Synology_Surveillance_Station')
  .get(function(req, res) {
    res.status(301).redirect('/Software/Other_Platforms/Synology');
});



/* ########################################## WebUI ########################################## */

indexPHPRouter.route('/HD_Manual_WebUI_Software')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Software/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Software')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Software/');
});

indexPHPRouter.route('/HD_Manual_WebUI_Software_Language')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Software/Language/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Software_Language')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Software/Language/');
});

indexPHPRouter.route('/HD_Manual_WebUI_Software_Reboot')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Software/Reboot_Reset/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Software_Neustart')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Software/Reboot_Reset/');
});

indexPHPRouter.route('/HD_Manual_WebUI_Software_Backup')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Software/Backup/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Software_Sicherung')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Software/Backup/');
});

indexPHPRouter.route('/HD_Manual_WebUI_Software_Update')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Software/Update/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Software_Update')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Software/Update/');
});



indexPHPRouter.route('/HD_Manual_WebUI_Network')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Network/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Netzwerk')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Network/');
});

indexPHPRouter.route('/HD_Manual_WebUI_Network_IP_Configuration')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Network/IP_Configuration');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Netzwerk_IP_Konfiguration')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Network/IP_Configuration');
});

indexPHPRouter.route('/HD_Manual_WebUI_Network_WiFi')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Network/WiFi');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Netzwerk_WLAN')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Network/WiFi');
});

indexPHPRouter.route('/HD_Manual_WebUI_Network_DDNS')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Network/DDNS');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Netzwerk_DDNS')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Network/DDNS');
});

indexPHPRouter.route('/HD_Manual_WebUI_Network_P2P')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Network/P2P');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Netzwerk_P2P')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Network/P2P');
});

indexPHPRouter.route('/HD_Manual_WebUI_Network_UPnP')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Network/UPnP');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Netzwerk_UPnP')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Network/UPnP');
});

indexPHPRouter.route('/HD_Manual_WebUI_Network_Push_Service')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Network/Push_Service');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Netzwerk_Push_Dienst')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Network/Push_Service');
});



indexPHPRouter.route('/HD_Manual_WebUI_System')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/System/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_System')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/System/');
});

indexPHPRouter.route('/HD_Manual_WebUI_System_Info')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/System/Info/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_System_Info')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/System/Info/');
});

indexPHPRouter.route('/HD_Manual_WebUI_System_Date-Time')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/System/Date_Time/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_System_Datum_Uhrzeit')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/System/Date_Time/');
});

indexPHPRouter.route('/HD_Manual_WebUI_System_User')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/System/User/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_System_Benutzer')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/System/User/');
});

indexPHPRouter.route('/HD_Manual_WebUI_System_Status_LED')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/System/Status_LED/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_System_Status_LED')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/System/Status_LED/');
});

indexPHPRouter.route('/HD_Manual_WebUI_System_IR_LEDs')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/System/IR_LED/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_System_IR_LEDs')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/System/IR_LED/');
});

indexPHPRouter.route('/HD_Manual_WebUI_System_ONVIF')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/System/ONVIF/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_System_ONVIF')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/System/ONVIF/');
});

indexPHPRouter.route('/HD_Manual_WebUI_System_PTZ')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/System/PTZ/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_System_PTZ')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/System/PTZ/');
});

indexPHPRouter.route('/HD_Manual_WebUI_System_PTZ_Tour')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/System/PTZ_Tour/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_System_PTZ_Tour')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/System/PTZ_Tour/');
});

indexPHPRouter.route('/HD_Manual_WebUI_System_Log')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/System/System_Log/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_System_Logbuch')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/System/System_Log/');
});



indexPHPRouter.route('/HD_Manual_WebUI_Multimedia')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Multimedia/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Multimedia')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Multimedia/');
});

indexPHPRouter.route('/HD_Manual_WebUI_Multimedia_Audio')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Multimedia/Audio/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Multimedia_Audio')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Multimedia/Audio/');
});

indexPHPRouter.route('/HD_Manual_WebUI_Multimedia_Video')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Multimedia/Video/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Multimedia_Video')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Multimedia/Video/');
});

indexPHPRouter.route('/HD_Manual_WebUI_Multimedia_Image')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Multimedia/Image/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Multimedia_Bild')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Multimedia/Image/');
});



indexPHPRouter.route('/HD_Manual_WebUI_Alarm')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Alarm/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Alarm')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Alarm/');
});

indexPHPRouter.route('/HD_Manual_WebUI_Alarm_Areas')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Alarm/Areas/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Alarm_Bereiche')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Alarm/Areas/');
});


indexPHPRouter.route('/HD_Manual_WebUI_Alarm_Privacy_Mask')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Alarm/Privacy_Mask/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Alarm_Privatsphäre')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Alarm/Privacy_Mask/');
});


indexPHPRouter.route('/HD_Manual_WebUI_Alarm_Actions')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Alarm/Actions/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Alarm_Aktionen')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Alarm/Actions/');
});


indexPHPRouter.route('/HD_Manual_WebUI_Alarm_Schedule')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Alarm/Schedule/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Alarm_Zeitplan')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Alarm/Schedule/');
});


indexPHPRouter.route('/HD_Manual_WebUI_Alarm_SMTP_Server')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Alarm/SMTP_Server/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Alarm_SMTP_Server')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Alarm/SMTP_Server/');
});

indexPHPRouter.route('/HD_Manual_WebUI_Alarm_EMAIL')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Alarm/Email/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Alarm_EMAIL')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Alarm/Email/');
});

indexPHPRouter.route('/HD_Manual_WebUI_Alarm_FTP')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Alarm/FTP/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Alarm_FTP')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Alarm/FTP/');
});

indexPHPRouter.route('/HD_Manual_WebUI_Alarm_Audio_Alarm')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Alarm/Audio_Alarm/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Alarm_Audio_Alarm')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Alarm/Audio_Alarm/');
});

indexPHPRouter.route('/HD_Manual_WebUI_Alarm_SD_Card')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Alarm/SD_Card/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Alarm_SD_Karte')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Alarm/SD_Card/');
});




indexPHPRouter.route('/HD_Manual_WebUI_Recording')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Recording/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Aufnahme')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Recording/');
});

indexPHPRouter.route('/HD_Manual_WebUI_Recording_Schedule')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Recording/Schedule/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Aufnahme_Zeitplan')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Recording/Schedule/');
});

indexPHPRouter.route('/HD_Manual_WebUI_Recording_Video')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Recording/Video/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Aufnahme_Video')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Recording/Video/');
});

indexPHPRouter.route('/HD_Manual_WebUI_Recording_Photoseries')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Recording/Photoseries/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Aufnahme_Fotoserie')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Recording/Photoseries/');
});



indexPHPRouter.route('/HD_Manual_WebUI_Menu_Bar')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Menu_Bar/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Menüleiste')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Menu_Bar/');
});

indexPHPRouter.route('/HD_Manual_WebUI_Video_Menu_Bar')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Video_Menu_Bar/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_Video_Menüleiste')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/Video_Menu_Bar/');
});

indexPHPRouter.route('/HD_Manual_WebUI_PTZ_Control')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/PTZ_Control/');
});

indexPHPRouter.route('/HD_Handbuch_Weboberfläche_PTZ_Kontrolle')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Series/PTZ_Control/');
});
















module.exports = indexPHPRouter;
