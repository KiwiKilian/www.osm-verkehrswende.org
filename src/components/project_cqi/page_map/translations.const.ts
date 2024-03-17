import type { ListStyleType } from './inspector/MapInspectorValueAsList'

export const skipInspectorKeys = [
  'index_10',
  'offset',
  'side',
  'fac_width',
  'fac_surface',
  'fac_highway',
  'fac_maxspeed',
  'proc_traffic_mode_left',
  'proc_traffic_mode_right',
  'fac_3',
  'data_incompleteness',
  'filter_way_type',
  'filter_usable',
]

export const listStyledKeys: Record<string, ListStyleType> = {
  data_missing: 'questionmark',
  data_bonus: 'plus',
  data_malus: 'minus',
}

export const translationsKey: Record<string, string> = {
  name: 'Straßenname',
  way_type: 'Wegeklasse',
  proc_width: 'Nutzbare Breite',
  proc_surface: 'Oberflächenbelag',
  proc_smoothness: 'Oberflächenqualität',
  proc_oneway: 'Fahrtrichtung',
  proc_sidepath: 'Straßenbegleitend',
  proc_highway: 'Anliegende Straßenklasse',
  proc_maxspeed: 'Anliegende Geschwindigkeitsbegrenzung',
  index: 'Indexwert',
  stress_level: 'Level of Traffic Stress',
  data_missing: 'Datenlücken',
  proc_separation_left: 'Abgrenzung links',
  proc_separation_right: 'Abgrenzung rechts',
  proc_buffer_left: 'Pufferabstand links',
  proc_buffer_right: 'Pufferabstand rechts',
  proc_mandatory: 'Benutzungspflicht',
  proc_traffic_sign: 'Verkehrszeichen',
  base_index: 'Grundeinstufung der Wegeklasse',
  fac_1: 'Faktor Wegequalität',
  fac_2: 'Faktor anliegende Straße',
  fac_4: 'Faktor sonstige Eigenschaften',
  data_bonus: 'Aufwertende Faktoren',
  data_malus: 'Abwertende Faktoren',
}

export const translationTagValues: Record<string, string> = {
  'way_type=cycle path': 'Frei geführter Radweg',
  'way_type=cycle track': 'Straßenbegleitender Radweg',
  'way_type=shared path': 'Gemeinsamer Geh- und Radweg',
  'way_type=segregated path': 'Getrennter Geh- und Radweg',
  'way_type=shared footway': 'Mitgenutzter Fußweg',
  'way_type=cycle lane (advisory)': 'Radschutzstreifen',
  'way_type=cycle lane (exclusive)': 'Radfahrstreifen',
  'way_type=cycle lane (protected)': 'Geschützter Radfahrstreifen',
  'way_type=cycle lane (central)': 'Radfahrstreifen in Mittellage',
  'way_type=bicycle road': 'Fahrradstraße',
  'way_type=shared road': 'Mitgenutzte Fahrbahn',
  'way_type=shared traffic lane': 'Mitgenutzte Fahrspur',
  'way_type=shared bus lane': 'Mitgenutzte Busspur',
  'way_type=track or service': 'Wirtschafts- oder Erschließungsweg',
  'way_type=link': 'Anbindung',
  'way_type=crossing': 'Furt',
  'proc_surface=asphalt': 'Asphalt',
  'proc_surface=paved': 'Versiegelte Oberfläche (unspezifisch)',
  'proc_surface=concrete': 'Beton',
  'proc_surface=metal': 'Metall',
  'proc_surface=paving_stones': 'Verbundpflastersteine',
  'proc_surface=compacted': 'Verdichtete Deckschicht',
  'proc_surface=fine_gravel': 'Fester Splitt oder Grand',
  'proc_surface=concrete:plates': 'Betonplatten',
  'proc_surface=bricks': 'Ziegelsteine',
  'proc_surface=sett': 'Behauenes Steinpflaster (Kopfsteinpflaster)',
  'proc_surface=cobblestone': 'Kopfsteinpflaster',
  'proc_surface=concrete:lanes': 'Betonspurplatten',
  'proc_surface=unpaved': 'Unbefestigt (unspezifisch)',
  'proc_surface=wood': 'Holz',
  'proc_surface=unhewn_cobblestone': 'Kopfsteinpflaster',
  'proc_surface=ground': 'Erde/Boden',
  'proc_surface=dirt': 'Erde/Boden',
  'proc_surface=earth': 'Erde/Boden',
  'proc_surface=mud': 'Schlamm',
  'proc_surface=gravel': 'Schotter',
  'proc_surface=pebblestone': 'Kies',
  'proc_surface=grass': 'Gras',
  'proc_surface=grass_paver': 'Rasengitterstein',
  'proc_surface=stepping_stones': 'Trittplatten',
  'proc_surface=woodchips': 'Holzhackschnitzel',
  'proc_surface=sand': 'Sand',
  'proc_surface=rock': 'Felsgestein',
  'proc_smoothness=excellent': 'Sehr gut',
  'proc_smoothness=good': 'Gut',
  'proc_smoothness=intermediate': 'Mittel gut',
  'proc_smoothness=bad': 'Schlecht',
  'proc_smoothness=very_bad': 'Sehr schlecht',
  'proc_smoothness=horrible': 'Äußerst schlecht',
  'proc_smoothness=very_horrible': 'Extrem schlecht',
  'proc_oneway=yes': 'Einrichtungsweg',
  'proc_oneway=no': 'Zweirichtungsweg',
  'proc_oneway=-1': 'Einrichtungsweg',
  'proc_oneway=yes_motor_vehicles': 'Einbahnstraße für Kraftfahrzeuge',
  'proc_sidepath=yes': 'Ja',
  'proc_sidepath=no': 'Nein',
  'proc_highway=motorway': 'Autobahn',
  'proc_highway=motorway_link': 'Autobahnanschluss',
  'proc_highway=trunk': 'Schnellstraße',
  'proc_highway=trunk_link': 'Schnellstraßenanschluss',
  'proc_highway=primary': 'Bundesstraße/Hauptverbindungsstraße',
  'proc_highway=primary_link': 'Bundesstraße/Hauptverbindungsstraße',
  'proc_highway=secondary': 'Landesstraße/Wichtige Durchgangsstraße',
  'proc_highway=secondary_link': 'Landesstraße/Wichtige Durchgangsstraße',
  'proc_highway=tertiary': 'Kreisstraße/Untergeordnete Durchgangsstraße',
  'proc_highway=tertiary_link': 'Kreisstraße/Untergeordnete Durchgangsstraße',
  'proc_highway=unclassified': 'Nebenstraße mit Verbindungscharakter',
  'proc_highway=road': 'Unkategorisierte Straße',
  'proc_highway=residential': 'Anwohnerstraße',
  'proc_highway=living_street': 'Verkehrsberuhigter Bereich',
  'proc_highway=service': 'Zufahrtsweg',
  'proc_highway=pedestrian': 'Fußgängerzone',
  'proc_maxspeed=299': 'unbegrenzt',
  'data_missing=width': 'Breite („width“)',
  'data_missing=surface': 'Oberflächenbelag („surface“)',
  'data_missing=smoothness': 'Oberflächenqualität („smoothness“)',
  'data_missing=width:lanes': 'Fahrspurbreiten („width:lanes“)',
  'data_missing=parking': 'Straßenparken',
  'data_missing=crossing': 'Querungstyp („crossing“)',
  'data_missing=crossing_markings': 'Querungsmarkierungen („crossing:markings“)',
  'data_missing=lit': 'Beleuchtung („lit“)',
  'proc_separation_left=no': 'Keine',
  'proc_separation_left=none': 'Keine',
  'proc_separation_left=studs': 'Fahrbahnreflektoren',
  'proc_separation_left=yes': 'Ja (unspezifiziert)',
  'proc_separation_left=vertical_panel': 'Leitboys/Baken',
  'proc_separation_left=tree_row': 'Baumreihe',
  'proc_separation_left=bump': 'Leitschwellen',
  'proc_separation_left=kerb': 'Bordstein',
  'proc_separation_left=flex_post': 'Biegepfosten',
  'proc_separation_left=greenery': 'Grünstreifen',
  'proc_separation_left=bollard': 'Feste Poller',
  'proc_separation_left=planter': 'Pflanzkübel',
  'proc_separation_left=structure': 'Bauwerk',
  'proc_separation_left=ditch': 'Graben',
  'proc_separation_left=jersey_barrier': 'Betonbarriere',
  'proc_separation_left=hedge': 'Hecke',
  'proc_separation_left=fence': 'Zaun',
  'proc_separation_left=guard_rail': 'Leitplanke',
  'proc_separation_right=no': 'Keine',
  'proc_separation_right=none': 'Keine',
  'proc_separation_right=studs': 'Fahrbahnreflektoren',
  'proc_separation_right=yes': 'Ja (unspezifiziert)',
  'proc_separation_right=vertical_panel': 'Leitboys/Baken',
  'proc_separation_right=tree_row': 'Baumreihe',
  'proc_separation_right=bump': 'Leitschwellen',
  'proc_separation_right=kerb': 'Bordstein',
  'proc_separation_right=flex_post': 'Biegepfosten',
  'proc_separation_right=greenery': 'Grünstreifen',
  'proc_separation_right=bollard': 'Feste Poller',
  'proc_separation_right=planter': 'Pflanzkübel',
  'proc_separation_right=structure': 'Bauwerk',
  'proc_separation_right=ditch': 'Graben',
  'proc_separation_right=jersey_barrier': 'Betonbarriere',
  'proc_separation_right=hedge': 'Hecke',
  'proc_separation_right=fence': 'Zaun',
  'proc_separation_right=guard_rail': 'Leitplanke',
  'proc_mandatory=yes': 'Benutzungspflichtig',
  'proc_mandatory=no': 'Nicht benutzungspflichtig',
  'proc_mandatory=use_sidepath': 'Benutzungspflichtiger Nebenweg',
  'proc_mandatory=optional_sidepath': 'Straßenbegleitender Angebotsweg',
  'proc_mandatory=prohibited': 'Radfahrverbot',
  'data_bonus=motor vehicle restricted': 'Einschränkung für Kraftfahrzeuge',
  'data_bonus=wide width': 'Große Breite',
  'data_bonus=excellent surface': 'Sehr gute Oberflächenqualität',
  'data_bonus=slow traffic': 'Langsamer Verkehr',
  'data_bonus=shared lane markings': 'Markierung für geteilten Radverkehr',
  'data_bonus=surface colour': 'Oberflächenfärbung',
  'data_bonus=signalled crossing': 'Ampelkreuzung',
  'data_bonus=marked crossing': 'Querungsmarkierungen',
  'data_malus=narrow width': 'Geringe Breite',
  'data_malus=bad surface': 'Schlechte Oberflächenqualität',
  'data_malus=along a major road': 'Anliegende Hauptverkehrsstraße',
  'data_malus=along a road with high speed limits': 'Anliegender schnellfahrender Verkehr',
  'data_malus=no street lighting': 'Keine Beleuchtung',
  'data_malus=insufficient dooring buffer':
    'Nicht ausreichender Sicherheitsabstand zu parkenden Fahrzeugen',
  'data_malus=cycling not intended': 'Radverkehr nicht vorgesehen',
  'filter_way_type=separated': 'Physisch separierte Wege',
  'filter_way_type=cycle lanes': 'Fahrradspuren auf der Fahrbahn',
  'filter_way_type=bicycle road': 'Fahrradstraßen',
  'filter_way_type=shared traffic': 'Gemeinsame Führung mit Kfz',
  'filter_usable=0': 'für Radverkehr nicht nutzbar',
  'filter_usable=1': 'für Radverkehr nutzbar',
}
