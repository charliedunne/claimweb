// ============================================================
// LANGUAGE TRANSLATIONS (i18n)
// ============================================================
const i18n = {
  // Título de la página
  title: {
    es: 'Guía de Referencia: Claim!',
    en: 'Reference Guide: Claim!'
  },

  // Barra de búsqueda
  search_placeholder: {
    es: '🔍 Buscar facción, héroe, artefacto o localización...',
    en: '🔍 Search faction, hero, artifact or location...'
  },

  // Botones de navegación
  nav_factions: { es: 'Facciones', en: 'Factions' },
  nav_heroes: { es: 'Héroes', en: 'Heroes' },
  nav_artifacts: { es: 'Artefactos', en: 'Artifacts' },
  nav_locations: { es: 'Localizaciones', en: 'Locations' },

  // Reglas generales
  rules_title: { es: 'ⓘ Reglas Generales', en: 'ⓘ General Rules' },
  rules_content_1: {
    es: '<strong>Fase 1 - Reclutar: </strong> 13 bazas. Se revela 1 carta del mazo. El líder juega una carta, el rival debe seguir facción si puede (Regla de Arrastre). Gana la carta del centro el de valor más alto de la facción líder. El perdedor roba del mazo.',
    en: '<strong>Phase 1 - Recruit: </strong> 13 tricks. 1 card is revealed from the deck. The leader plays a card, the opponent must follow suit if possible (Drag Rule). The highest value card of the leader\'s faction wins the center card. The loser draws from the deck.'
  },
  rules_content_2: {
    es: '<strong>Fase 2 - Simpatizantes: </strong> 13 bazas con las cartas ganadas. Se compite por las 2 cartas jugadas. Regla de arrastre vigente.',
    en: '<strong>Phase 2 - Sympathizers: </strong> 13 tricks with the won cards. Compete for the 2 played cards. Drag rule applies.'
  },
  rules_content_3: {
    es: '<strong>Victoria: </strong> Ganas el voto de una facción teniendo más cartas de ella en tu pila de Simpatizantes. Gana la partida quien consiga 3 votos.',
    en: '<strong>Victory: </strong> You win a faction\'s vote by having more cards of that faction in your Sympathizer pile. The player who gets 3 votes wins the game.'
  },
  rules_content_4: {
    es: '<br><strong>Reglas para 3 y 4 jugadores: </strong>Añade 2 facciones al mazo y reparte a cada jugador:',
    en: '<br><strong>Rules for 3 and 4 players: </strong>Add 2 factions to the deck and deal to each player:'
  },
  rules_3p: { es: 'En una partida a 3 jugadores: 12 cartas.', en: 'In a 3-player game: 12 cards.' },
  rules_4p: { es: 'En una partida a 4 jugadores: 9 cartas.', en: 'In a 4-player game: 9 cards.' },

  // Sección Facciones
  section_factions: { es: '⚔️ Facciones', en: '⚔️ Factions' },

  // Goblins
  faction_goblins_title: { es: 'Goblins', en: 'Goblins' },
  faction_goblins_box: { es: 'Claim 1', en: 'Claim 1' },
  faction_goblins_tag: { es: '14 Cartas (0-9)', en: '14 Cards (0-9)' },
  faction_goblins_power: { es: '<strong>Poder: </strong> No tienen poderes especiales.', en: '<strong>Power: </strong> No special powers.' },

  // Caballeros
  faction_caballeros_title: { es: 'Caballeros', en: 'Knights' },
  faction_caballeros_box: { es: 'Claim 1', en: 'Claim 1' },
  faction_caballeros_tag: { es: '8 Cartas (2-9)', en: '8 Cards (2-9)' },
  faction_caballeros_power: { es: '<strong>Poder: </strong> Cuando juegas un Caballero después de un Goblin, el Caballero gana automáticamente al Goblin, independientemente de su valor. Debes seguir la regla de arrastre si puedes.', en: '<strong>Power: </strong> When you play a Knight after a Goblin, the Knight automatically beats the Goblin, regardless of its value. You must follow the drag rule if you can.' },

  // Enanos
  faction_enanos_title: { es: 'Enanos', en: 'Dwarves' },
  faction_enanos_box: { es: 'Claim 1', en: 'Claim 1' },
  faction_enanos_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_enanos_power: { es: '<strong>Poder (Fase 2): </strong> El perdedor de la baza coloca en su pila de Simpatizantes todas las cartas de Enano jugadas. El ganador se lleva las que no sean de Enano.', en: '<strong>Power (Phase 2): </strong> The loser of the trick places all played Dwarf cards into their Sympathizer pile. The winner takes the non-Dwarf cards.' },

  // No-muertos
  faction_nomuertos_title: { es: 'No Muertos', en: 'Undead' },
  faction_nomuertos_box: { es: 'Claim 1', en: 'Claim 1' },
  faction_nomuertos_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_nomuertos_power: { es: '<strong>Poder (Fase 1): </strong> Las cartas jugadas de No-Muertos no se descartan. Se añaden a la pila de Simpatizantes del ganador de la baza. Si una carta de No-Muerto está en el centro y es ganada, va al mazo de Seguidores.', en: '<strong>Power (Phase 1): </strong> Played Undead cards are not discarded. They are added to the winner\'s Sympathizer pile. If an Undead card is in the center and is won, it goes to the Followers deck.' },

  // Doppelgängers
  faction_doppelgangers_title: { es: 'Doppelgängers', en: 'Doppelgängers' },
  faction_doppelgangers_box: { es: 'Claim 1', en: 'Claim 1' },
  faction_doppelgangers_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_doppelgangers_power: { es: '<strong>Poder: </strong> Facción comodín. Puedes jugarlo en vez de seguir a la facción líder, aunque tengas cartas de esa facción. Se considera de la misma facción que la carta jugada por el Líder, pero NO copia sus poderes.', en: '<strong>Power: </strong> Wildcard faction. You may play it instead of following the leader\'s faction, even if you have cards of that faction. It is considered the same faction as the card played by the Leader, but does NOT copy its powers.' },

  // Gnomos
  faction_gnomos_title: { es: 'Gnomos', en: 'Gnomes' },
  faction_gnomos_box: { es: 'Claim 2', en: 'Claim 2' },
  faction_gnomos_tag: { es: '13 Cartas (Impares 1-9)', en: '13 Cards (Odd 1-9)' },
  faction_gnomos_power: { es: '<strong>Poder (Fase 2): </strong> Se colocan boca arriba delante de ti, no en la pila de Simpatizantes. Al final de la partida, los que queden se mueven a la pila de Simpatizantes.', en: '<strong>Power (Phase 2): </strong> They are placed face up in front of you, not in the Sympathizer pile. At the end of the game, the remaining ones are moved to the Sympathizer pile.' },

  // Gigantes
  faction_gigantes_title: { es: 'Gigantes', en: 'Giants' },
  faction_gigantes_box: { es: 'Claim 2', en: 'Claim 2' },
  faction_gigantes_tag: { es: '9 Cartas (Impares 1-9)', en: '9 Cards (Odd 1-9)' },
  faction_gigantes_power: { es: '<strong>Poder (Fase 2): </strong> Si ganas la baza, cada Gigante jugado puede aplastar un Gnomo del oponente del mismo valor. El Gnomo aplastado se descarta y no puntúa.', en: '<strong>Power (Phase 2): </strong> If you win the trick, each Giant played can crush an opponent\'s Gnome of the same value. The crushed Gnome is discarded and does not score.' },

  // Dragones
  faction_dragones_title: { es: 'Dragones', en: 'Dragons' },
  faction_dragones_box: { es: 'Claim 2', en: 'Claim 2' },
  faction_dragones_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_dragones_power: { es: '<strong>Poder: </strong> El último jugador en jugar un Dragón en una baza será el Líder de la siguiente baza, sin importar el valor o quién ganó la baza.', en: '<strong>Power: </strong> The last player to play a Dragon in a trick will be the Leader of the next trick, regardless of value or who won the trick.' },

  // Trolls
  faction_trolls_title: { es: 'Trolls', en: 'Trolls' },
  faction_trolls_box: { es: 'Claim 2', en: 'Claim 2' },
  faction_trolls_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_trolls_power: { es: '<strong>Poder (Fase 2): </strong> Solo se puede conseguir 1 Troll por baza. Si se juegan dos, el ganador se lleva el de mayor valor y el otro se aparta para el ganador de la siguiente baza.', en: '<strong>Power (Phase 2): </strong> Only 1 Troll can be obtained per trick. If two are played, the winner takes the higher value one and the other is set aside for the winner of the next trick.' },

  // Videntes
  faction_videntes_title: { es: 'Videntes', en: 'Seers' },
  faction_videntes_box: { es: 'Claim 2', en: 'Claim 2' },
  faction_videntes_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_videntes_power: { es: '<strong>Poder (Fase 1): </strong> Si ganas la baza con una Vidente, puedes mirar la carta superior del mazo y elegir entre tomar esa o la del centro de la mesa.', en: '<strong>Power (Phase 1): </strong> If you win the trick with a Seer, you may look at the top card of the deck and choose to take that one or the center card.' },

  // Cíclopes
  faction_cilopes_title: { es: 'Cíclopes', en: 'Cyclopes' },
  faction_cilopes_box: { es: 'Refuerzos: Mercenarios', en: 'Reinforcements: Mercenaries' },
  faction_cilopes_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_cilopes_power: { es: '<strong>Poder: </strong> Al final de la partida, el jugador con MENOS cartas de Cíclope gana el voto (debes tener al menos 1). En empate, gana el de menor valor en mesa.', en: '<strong>Power: </strong> At the end of the game, the player with the FEWEST Cyclops cards wins the vote (you must have at least 1). In case of a tie, the one with the lowest value on the table wins.' },

  // Elfos
  faction_elfos_title: { es: 'Elfos', en: 'Elves' },
  faction_elfos_box: { es: 'Refuerzos: Mercenarios', en: 'Reinforcements: Mercenaries' },
  faction_elfos_tag: { es: '7 Cartas (1-7)', en: '7 Cards (1-7)' },
  faction_elfos_power: { es: '<strong>Poder: </strong> Sin poder especial', en: '<strong>Power: </strong> No special power' },

  // Orcos
  faction_orcos_title: { es: 'Orcos', en: 'Orcs' },
  faction_orcos_box: { es: 'Refuerzos: Mercenarios', en: 'Reinforcements: Mercenaries' },
  faction_orcos_tag: { es: '7 Cartas (1-7)', en: '7 Cards (1-7)' },
  faction_orcos_power: { es: '<strong>Poder: </strong> Sin poder especial.', en: '<strong>Power: </strong> No special power.' },

  // Elfos/Orcos
  faction_elfosorcos_title: { es: 'Elfos/Orcos', en: 'Elves/Orcs' },
  faction_elfosorcos_box: { es: 'Refuerzos: Mercenarios', en: 'Reinforcements: Mercenaries' },
  faction_elfosorcos_tag: { es: '8 Cartas (1-8)', en: '8 Cards (1-8)' },
  faction_elfosorcos_power: { es: '<strong>Poder: </strong>En la Fase 1 o 2, cuando juegas una carta de doble facción, debes anunciar si la juegas como Elfo o como Orco. <br>En la Fase 2, si ganas esta carta, cuenta como la facción que fue anunciada al jugarla. Puedes girar la carta para indicar de qué facción es.', en: '<strong>Power: </strong>In Phase 1 or 2, when you play a dual‑faction card, you must announce whether you play it as an Elf or as an Orc. <br>In Phase 2, if you win this card, it counts as the faction that was announced when played. You may turn the card to indicate which faction it is.' },

  // Magos
  faction_magos_title: { es: 'Magos', en: 'Mages' },
  faction_magos_box: { es: 'Refuerzos: Magia', en: 'Reinforcements: Magic' },
  faction_magos_tag: { es: '10 Cartas (0-9) + 10 Cartas de pociones', en: '10 Cards (0-9) + 10 Potion cards' },
  faction_magos_power: { es: '<strong>Poder: </strong> Si ganas con un Mago, roba una carta de Poción (boca abajo). Durante otra baza puedes voltearla para alterar el valor de tu carta (suele subir, pero puede bajar).', en: '<strong>Power: </strong> If you win with a Mage, draw a Potion card (face down). During another trick you may flip it to alter your card\'s value (usually up, but may go down).' },

  // Druidas
  faction_druidas_title: { es: 'Druidas', en: 'Druids' },
  faction_druidas_box: { es: 'Refuerzos: Magia', en: 'Reinforcements: Magic' },
  faction_druidas_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_druidas_power: { es: '<strong>Poder (Fase 1): </strong> Si pierdes tras jugar un Druida, se queda delante de ti girado 180º (se convierte en Oso). Tu siguiente carta jugada obtiene +3 a su valor.', en: '<strong>Power (Phase 1): </strong> If you lose after playing a Druid, it stays in front of you rotated 180º (becomes a Bear). Your next played card gets +3 to its value.' },

  // Cambiaformas
  faction_cambiaformas_title: { es: 'Cambiaformas', en: 'Changellings' },
  faction_cambiaformas_box: { es: 'Refuerzos: Magia', en: 'Reinforcements: Magic' },
  faction_cambiaformas_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_cambiaformas_power: { es: '<strong>Poder (Fase 1): </strong> Al jugarlo, se intercambia con la carta del centro de la mesa. Ahora competiréis por el Cambiaformas.', en: '<strong>Power (Phase 1): </strong> When played, it swaps with the center card. Now you will compete for the Changelling.' },

  // Basiliscos
  faction_basiliscos_title: { es: 'Basiliscos', en: 'Basilisks' },
  faction_basiliscos_box: { es: 'Refuerzos: Mapas', en: 'Reinforcements: Maps' },
  faction_basiliscos_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_basiliscos_power: { es: '<strong>Poder: </strong> Si juegas esta carta después de una del mismo valor, colocas la carta del oponente en tu pila de Simpatizantes, ganas la baza y lideras la siguiente.', en: '<strong>Power: </strong> If you play this card after one of the same value, you place the opponent\'s card in your Sympathizer pile, win the trick, and lead the next.' },

  // Fénix
  faction_fenix_title: { es: 'Fénix', en: 'Phoenix' },
  faction_fenix_box: { es: 'Refuerzos: Mapas', en: 'Reinforcements: Maps' },
  faction_fenix_tag: { es: '10 Fénix + 10 Fuegos', en: '10 Phoenix + 10 Fires' },
  faction_fenix_power: { es: '<strong>Poder (Fase 2): </strong> Si pierdes jugando un Fénix, roba una carta de Fuego de Fénix a tu mano. Funciona exactamente como un Fénix normal.', en: '<strong>Power (Phase 2): </strong> If you lose playing a Phoenix, draw a Phoenix Fire card to your hand. It works exactly like a normal Phoenix.' },

  // Unicornios
  faction_unicornios_title: { es: 'Unicornios', en: 'Unicorns' },
  faction_unicornios_box: { es: 'Refuerzos: Mapas', en: 'Reinforcements: Maps' },
  faction_unicornios_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_unicornios_power: { es: '<strong>Poder (Fase 2): </strong> Cada carta de Unicornio ganada aumenta el valor de las cartas de OTRA facción que juegues en +1 por Unicornio. No afecta a la puntuación final.', en: '<strong>Power (Phase 2): </strong> Each Unicorn card won increases the value of cards of ANOTHER faction you play by +1 per Unicorn. Does not affect final scoring.' },

  // Vampiros
  faction_vampiros_title: { es: 'Vampiros', en: 'Vampires' },
  faction_vampiros_box: { es: 'Refuerzos: Mapas', en: 'Reinforcements: Maps' },
  faction_vampiros_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_vampiros_power: { es: '<strong>Poder (Fase 2): </strong> Se colocan boca arriba. Las cartas de otras facciones ganadas se ponen DEBAJO del Vampiro. Cuentan para el voto de Vampiros, no para su facción original. Al final se suman valores.', en: '<strong>Power (Phase 2): </strong> They are placed face up. Won cards from other factions are placed UNDER the Vampire. They count for the Vampire vote, not for their original faction. At the end, values are summed.' },

  // Zombis
  faction_zombis_title: { es: 'Zombis', en: 'Zombies' },
  faction_zombis_box: { es: 'Refuerzos: Mapas', en: 'Reinforcements: Maps' },
  faction_zombis_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_zombis_power: { es: '<strong>Poder (Fase 1): </strong> Si ganas la baza con un Zombi, la carta jugada por tu oponente va a tu pila de Simpatizantes.', en: '<strong>Power (Phase 1): </strong> If you win the trick with a Zombie, the card played by your opponent goes to your Sympathizer pile.' },

  // Hombres Lobo
  faction_hombreslobo_title: { es: 'Hombres Lobo', en: 'Werewolves' },
  faction_hombreslobo_box: { es: 'Refuerzos: Mapas', en: 'Reinforcements: Maps' },
  faction_hombreslobo_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_hombreslobo_power: { es: '<strong>Poder: </strong> Se usan 2 cartas de Luna (Llena/Sin luna). Si gana la baza el Hombre Lobo, se cambia la carta de Luna. Sin luna arriba: gana el de menor valor. Luna llena arriba: gana el de mayor valor.', en: '<strong>Power: </strong> 2 Moon cards are used (Full/No moon). If the Werewolf wins the trick, the Moon card is flipped. No moon up: lowest value wins. Full moon up: highest value wins.' },

  // Sombras
  faction_sombras_title: { es: 'Sombras', en: 'Shadows' },
  faction_sombras_box: { es: 'Refuerzos: Mapas', en: 'Reinforcements: Maps' },
  faction_sombras_tag: { es: '10 de 20 Cartas (0-19)', en: '10 out of 20 Cards (0-19)' },
  faction_sombras_power: { es: '<strong>Poder: </strong> Se barajan las 20 y se meten 10 al azar. Nadie sabe qué valores hay en juego durante la partida.', en: '<strong>Power: </strong> Shuffle the 20 and put 10 at random. Nobody knows which values are in play during the game.' },

  // Demonios
  faction_demonios_title: { es: 'Demonios', en: 'Demons' },
  faction_demonios_box: { es: 'Refuerzos: Fuego', en: 'Reinforcements: Fire' },
  faction_demonios_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_demonios_power: { es: '<strong>Poder: </strong> Al jugarla solo se sabe si es Par o Impar. Su valor real se comprueba al resolver la baza.', en: '<strong>Power: </strong> When played, only known if it is Even or Odd. Its real value is checked when resolving the trick.' },

  // Elementales de Fuego
  faction_elementalesfuego_title: { es: 'Elementales de Fuego', en: 'Fire Elementals' },
  faction_elementalesfuego_box: { es: 'Refuerzos: Fuego', en: 'Reinforcements: Fire' },
  faction_elementalesfuego_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_elementalesfuego_power: { es: '<strong>Poder: </strong> Al jugarla solo se sabe si es Alta (5-9) o Baja (0-4). El valor se comprueba al resolver.', en: '<strong>Power: </strong> When played, only known if it is High (5-9) or Low (0-4). The value is checked when resolving.' },

  // Pícaros
  faction_picaros_title: { es: 'Pícaros', en: 'Rogues' },
  faction_picaros_box: { es: 'Refuerzos: Fuego', en: 'Reinforcements: Fire' },
  faction_picaros_tag: { es: '10 Cartas (Impares 1-9)', en: '10 Cards (Odd 1-9)' },
  faction_picaros_power: { es: '<strong>Poder: </strong> Hay 2 copias de cada valor. Una verdadera y una falsa (marcada con X). El engaño se comprueba al final de la partida, descartando las cartas con X.', en: '<strong>Power: </strong> There are 2 copies of each value. One true and one false (marked with X). The deception is checked at the end of the game, discarding cards with X.' },

  // Envenenadores
  faction_envenenadores_title: { es: 'Envenenadores', en: 'Poisoners' },
  faction_envenenadores_box: { es: 'Refuerzos: Fuego', en: 'Reinforcements: Fire' },
  faction_envenenadores_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_envenenadores_power: { es: '<strong>Poder: </strong> Se ponen 3 cartas de Veneno boca arriba. Si ganas con un Envenenador puedes mirar una con el Filtro Revelador. Al final, se descartan de las pilas las cartas que coincidan con los valores de veneno revelados.', en: '<strong>Power: </strong> 3 Poison cards are placed face up. If you win with a Poisoner you may look at one with the Revealing Filter. At the end, cards matching the revealed poison values are discarded from the piles.' },

  // Reyes de Hielo
  faction_reyeshielo_title: { es: 'Reyes de Hielo', en: 'Ice Kings' },
  faction_reyeshielo_box: { es: 'Refuerzos: Hielo', en: 'Reinforcements: Ice' },
  faction_reyeshielo_tag: { es: '11 Cartas (0-10)', en: '11 Cards (0-10)' },
  faction_reyeshielo_power: { es: '<strong>Poder: </strong> Antes de determinar el voto de la facción: descarta de la pila de simpatizantes todas las parejas de Rey del hielo/Reina del hielo que tengan el mismo valor: ¡se casan y se escapan!.', en: '<strong>Power: </strong> Before determining the faction vote: discard from the sympathizer pile all pairs of Ice King/Ice Queen with the same value: they marry and run away!.' },

  // Reinas de Hielo
  faction_reinashielo_title: { es: 'Reinas de Hielo', en: 'Ice Queens' },
  faction_reinashielo_box: { es: 'Refuerzos: Hielo', en: 'Reinforcements: Ice' },
  faction_reinashielo_tag: { es: '11 Reinas (0-10)', en: '11 Queens (0-10)' },
  faction_reinashielo_power: { es: '<strong>Poder: </strong> Antes de determinar el voto de la facción: descarta de la pila de simpatizantes todas las parejas de Rey del hielo/Reina del hielo que tengan el mismo valor: ¡se casan y se escapan!.', en: '<strong>Power: </strong> Before determining the faction vote: discard from the sympathizer pile all pairs of Ice King/Ice Queen with the same value: they marry and run away!.' },

  // Yetis
  faction_yetis_title: { es: 'Yetis', en: 'Yetis' },
  faction_yetis_box: { es: 'Refuerzos: Hielo', en: 'Reinforcements: Ice' },
  faction_yetis_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_yetis_power: { es: '<strong>Poder: </strong> Incluso si ganas la baza con un Yeti, NO serás el Líder de la siguiente baza.', en: '<strong>Power: </strong> Even if you win the trick with a Yeti, you will NOT be the Leader of the next trick.' },

  // Bestias del Hielo
  faction_bestiasdelhielo_title: { es: 'Bestias del Hielo', en: 'Ice Beasts' },
  faction_bestiasdelhielo_box: { es: 'Refuerzos: Hielo', en: 'Reinforcements: Ice' },
  faction_bestiasdelhielo_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_bestiasdelhielo_power: { es: '<strong>Poder (Fase 2): </strong> Si ganas la baza con esta carta, la otra carta jugada se descarta y no la colocas en tu pila de Simpatizantes.', en: '<strong>Power (Phase 2): </strong> If you win the trick with this card, the other played card is discarded and you do not place it in your Sympathizer pile.' },

  // Ángeles
  faction_angeles_title: { es: 'Ángeles', en: 'Angels' },
  faction_angeles_box: { es: 'Refuerzos: Cielo', en: 'Reinforcements: Sky' },
  faction_angeles_tag: { es: '12 Cartas (0-11)', en: '12 Cards (0-11)' },
  faction_angeles_power: { es: '<strong>Poder: </strong> Al final de la partida, si no hay otras cartas en tu pila de Simpatizantes con el mismo número que una determinada carta de Ángel, esa carta cuenta x2 para determinar el apoyo de la facción.', en: '<strong>Power: </strong> At the end of the game, if there are no other cards in your Sympathizer pile with the same number as a given Angel card, that card counts x2 for determining faction support.' },

  // Ágilas
  faction_agilas_title: { es: 'Ágilas', en: 'Eagles' },
  faction_agilas_box: { es: 'Refuerzos: Cielo', en: 'Reinforcements: Sky' },
  faction_agilas_tag: { es: '12 Cartas (0-11)', en: '12 Cards (0-11)' },
  faction_agilas_power: { es: '<strong>Poder: </strong> Las Águilas no pueden liderar dos bazas consecutivas, a excepción de que el jugador únicamente tenga Águilas en la mano.', en: '<strong>Power: </strong> Eagles cannot lead two consecutive tricks, unless the player only has Eagles in hand.' },

  // Pterosaurios
  faction_pterosaurios_title: { es: 'Pterosaurios', en: 'Pterosaurs' },
  faction_pterosaurios_box: { es: 'Refuerzos: Cielo', en: 'Reinforcements: Sky' },
  faction_pterosaurios_tag: { es: '12 Cartas (0-11)', en: '12 Cards (0-11)' },
  faction_pterosaurios_power: { es: '<strong>Poder: </strong> Al final de la partida, ¡todas las cartas de Pterosaurio de valor ≥ 7 se extinguen! Dichas cartas no cuentan para la determinación de la mayoría en la facción.', en: '<strong>Power: </strong> At the end of the game, all Pterosaur cards with value ≥ 7 go extinct! Those cards do not count for determining the faction majority.' },

  // Elementales de Luz
  faction_elementalesluz_title: { es: 'Elementales de Luz', en: 'Light Elementals' },
  faction_elementalesluz_box: { es: 'Refuerzos: Cielo', en: 'Reinforcements: Sky' },
  faction_elementalesluz_tag: { es: '12 Cartas (0-11)', en: '12 Cards (0-11)' },
  faction_elementalesluz_power: { es: '<strong>Poder (Fase 2): </strong> Fase 2: puedes descartar cualquier número de Elementales de Luz de tu pila de Simpatizantes para potenciar una carta jugada. Cada carta descartada potencia a la carta jugada en +1.', en: '<strong>Power (Phase 2): </strong> Phase 2: you may discard any number of Light Elementals from your Sympathizer pile to boost a played card. Each discarded card boosts the played card by +1.' },

  // Buitres
  faction_buitres_title: { es: 'Buitres', en: 'Vultures' },
  faction_buitres_box: { es: 'Refuerzos: Cielo', en: 'Reinforcements: Sky' },
  faction_buitres_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_buitres_power: { es: '<strong>Poder: </strong> Al final de la partida, si ganas la mayoría en la facción de Buitres, baraja la pila de descarte de la Fase 1 y roba 2 cartas. Añade esas cartas a tus pilas de Simpatizantes correspondientes.', en: '<strong>Power: </strong> At the end of the game, if you win the majority in the Vulture faction, shuffle the Phase 1 discard pile and draw 2 cards. Add those cards to your corresponding Sympathizer piles.' },

  // Monjes Solares
  faction_monjessol_title: { es: 'Monjes Solares', en: 'Sun Monks' },
  faction_monjessol_box: { es: 'Refuerzos: Sol', en: 'Reinforcements: Sun' },
  faction_monjessol_tag: { es: '11 Cartas (0-10)', en: '11 Cards (0-10)' },
  faction_monjessol_power: { es: '<strong>Poder: </strong> Cuando se juega un Monje del Sol, una regla especial del arrastre obliga al otro jugador a jugar un Monje de la Estrella. Si el otro jugador acompaña correctamente, el valor más alto de ambos gana la baza. Un Monje del Sol jugado tras otro Monje del Sol se consideran de facciones distintas, ganando la baza automáticamente el primer jugador.', en: '<strong>Power: </strong> When a Sun Monk is played, a special drag rule forces the other player to play a Star Monk. If the other player follows correctly, the highest value of both wins the trick. A Sun Monk played after another Sun Monk are considered different factions, the first player automatically wins the trick.' },

  // Monjes Estelares
  faction_monjesestrella_title: { es: 'Monjes Estelares', en: 'Star Monks' },
  faction_monjesestrella_box: { es: 'Refuerzos: Sol', en: 'Reinforcements: Sun' },
  faction_monjesestrella_tag: { es: '11 Cartas (0-10)', en: '11 Cards (0-10)' },
  faction_monjesestrella_power: { es: '<strong>Poder: </strong> Cuando se juega un Monje de la Estrella, una regla especial del arrastre obliga al otro jugador a jugar un Monje del Sol. Si el otro jugador acompaña correctamente, el valor más alto de ambos gana la baza. Un Monje de la Estrella jugado tras otro Monje de la Estrella se consideran de facciones distintas, ganando la baza automáticamente el primer jugador.', en: '<strong>Power: </strong> When a Star Monk is played, a special drag rule forces the other player to play a Sun Monk. If the other player follows correctly, the highest value of both wins the trick. A Star Monk played after another Star Monk are considered different factions, the first player automatically wins the trick.' },

  // Profetas
  faction_profetas_title: { es: 'Profetas', en: 'Prophets' },
  faction_profetas_box: { es: 'Refuerzos: Sol', en: 'Reinforcements: Sun' },
  faction_profetas_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_profetas_power: { es: '<strong>Poder (Fase 2): </strong>El ganador del favor de los Profetas se determina en función del número de runas. Si hay al menos 3 runas combinadas en la pila de Simpatizantes de un jugador, el Profeta con el mayor valor gana. Si no hay menos de 3 runas, el Profeta con el menor valor gana la baza. <br><br>Las runas son iconos <img src="img/factions/Runa.png" alt="Runa" width="20"> en las cartas de Profeta.', en: '<strong>Power (Phase 2): </strong>The winner of the Prophets\' favor is determined by the number of runes. If there are at least 3 combined runes in a player\'s Sympathizer pile, the Prophet with the highest value wins. If there are less than 3 runes, the Prophet with the lowest value wins the trick. <br><br>Runes are icons <img src="img/factions/Runa.png" alt="Rune" width="20"> on Prophet cards.' },

  // Gusanos de Arena
  faction_gusanosarena_title: { es: 'Gusanos de Arena', en: 'Sand Worms' },
  faction_gusanosarena_box: { es: 'Refuerzos: Sol', en: 'Reinforcements: Sun' },
  faction_gusanosarena_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_gusanosarena_power: { es: '<strong>Poder (Fase 2): </strong> Fases 1 y 2: cuando se juega una baza con un Gusano de Arena, se juega boca abajo. Cuando todos los jugadores han jugado carta, las cartas se revelan.', en: '<strong>Power (Phase 2): </strong> Phases 1 and 2: when a trick is played with a Sand Worm, it is played face down. When all players have played, the cards are revealed.' },

  // Escorpiones
  faction_escorpiones_title: { es: 'Escorpiones', en: 'Scorpions' },
  faction_escorpiones_box: { es: 'Refuerzos: Sol', en: 'Reinforcements: Sun' },
  faction_escorpiones_tag: { es: '10 Cartas (0-9) + 6 Cartas de picadura', en: '10 Cards (0-9) + 6 Sting cards' },
  faction_escorpiones_power: { es: '<strong>Poder (Fase 2): </strong>Cuando añades un Escorpión a tu pila de Simpatizantes, debes tomar una carta de picadura. Las cartas de picadura te darán una penalización o un bonus especial para la siguiente baza que juegues. Después, se descartan. Si el mazo de picaduras se agota, baraja el descarte para formar un nuevo mazo.', en: '<strong>Power (Phase 2): </strong>When you add a Scorpion to your Sympathizer pile, you must take a Sting card. Sting cards will give you a penalty or a special bonus for the next trick you play. Afterwards, they are discarded. If the Sting deck runs out, shuffle the discard to form a new deck.' },

  // Piratas
  faction_piratas_title: { es: 'Piratas', en: 'Pirates' },
  faction_piratas_box: { es: 'Refuerzos: Agua', en: 'Reinforcements: Water' },
  faction_piratas_tag: { es: '11 Cartas (0-10)', en: '11 Cards (0-10)' },
  faction_piratas_power: { es: '<strong>Poder: </strong> Al final de la partida, si un jugador tiene un Pirata y un Royal Navy del mismo valor, el Pirata es arrestado. Dicho Pirata cuenta como una carta de Royal Navy para determinar la mayoría de la facción (ya no cuenta como Pirata).', en: '<strong>Power: </strong> At the end of the game, if a player has a Pirate and a Royal Navy of the same value, the Pirate is arrested. That Pirate counts as a Royal Navy card for determining the faction majority (no longer counts as a Pirate).' },

  // Royal Navy
  faction_royalnavy_title: { es: 'Royal Navy', en: 'Royal Navy' },
  faction_royalnavy_box: { es: 'Refuerzos: Agua', en: 'Reinforcements: Water' },
  faction_royalnavy_tag: { es: '11 Cartas (0-10)', en: '11 Cards (0-10)' },
  faction_royalnavy_power: { es: '<strong>Poder: </strong> Al final de la partida, si un jugador tiene un Pirata y un Royal Navy del mismo valor, el Pirata es arrestado. Dicho Pirata cuenta como una carta de Royal Navy para determinar la mayoría de la facción (ya no cuenta como Pirata).', en: '<strong>Power: </strong> At the end of the game, if a player has a Pirate and a Royal Navy of the same value, the Pirate is arrested. That Pirate counts as a Royal Navy card for determining the faction majority (no longer counts as a Pirate).' },

  // Monstruos Marinos
  faction_monstruosmarinos_title: { es: 'Monstruos Marinos', en: 'Sea Monsters' },
  faction_monstruosmarinos_box: { es: 'Refuerzos: Agua', en: 'Reinforcements: Water' },
  faction_monstruosmarinos_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_monstruosmarinos_power: { es: '<strong>Poder: </strong> Fase 1: si un Monstruo marino es revelado como carta central, los jugadores deben intercambiar una carta de su mano cada uno. Las cartas con el otro jugador se intercambian boca abajo.', en: '<strong>Power: </strong> Phase 1: if a Sea Monster is revealed as the center card, players must exchange one card from their hand each. Cards with the other player are exchanged face down.' },

  // Pulpos
  faction_pulpos_title: { es: 'Pulpos', en: 'Octopuses' },
  faction_pulpos_box: { es: 'Refuerzos: Agua', en: 'Reinforcements: Water' },
  faction_pulpos_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_pulpos_power: { es: '<strong>Poder (Fase 2): </strong> Las cartas de valor ≥ 8 de cualquier otra facción ganan siempre a un Pulpo (tenga éste el valor que tenga).', en: '<strong>Power (Phase 2): </strong> Cards with value ≥ 8 from any other faction always beat an Octopus (regardless of its value).' },

  // Hombres Pez
  faction_hombrespez_title: { es: 'Hombres Pez', en: 'Fishmen' },
  faction_hombrespez_box: { es: 'Refuerzos: Agua', en: 'Reinforcements: Water' },
  faction_hombrespez_tag: { es: '10 Cartas (0-9) + 6 Cartas de Tridente', en: '10 Cards (0-9) + 6 Trident cards' },
  faction_hombrespez_power: { es: '<strong>Poder (Fases 1 y 2): </strong>Si pierdes una baza en la que jugaste un Hombre pez, toma una carta de tridente del mazo de robo o de otro jugador si el mazo de tridentes se ha agotado. El valor de todos los Hombres pez se incrementa en +1 por cada carta de tridente que poseas.', en: '<strong>Power (Phases 1 and 2): </strong>If you lose a trick in which you played a Fishman, take a Trident card from the draw deck or from another player if the Trident deck is exhausted. The value of all Fishmen increases by +1 for each Trident card you possess.' },

  // Elfos Oscuros
  faction_elfososcuros_title: { es: 'Elfos Oscuros', en: 'Dark Elves' },
  faction_elfososcuros_box: { es: 'Promo', en: 'Promo' },
  faction_elfososcuros_tag: { es: '10 Cartas (1-7)', en: '10 Cards (1-7)' },
  faction_elfososcuros_power: { es: '<strong>Poder (Fase 2): </strong>Si ganas un Elfo oscuro en una baza, debes descartar y retirar del juego una carta de otra facción en tu pila de simpatizantes. Si solamente hay Elfos oscuros entre tus simpatizantes, no tienes que descartar ninguna carta. Si ganas más de un Elfo oscuro en una baza, sigues teniendo que descartar solo una carta de otra facción.', en: '<strong>Power (Phase 2): </strong>If you win a Dark Elf in a trick, you must discard and remove from the game a card of another faction from your sympathizer pile. If there are only Dark Elves among your sympathizers, you do not have to discard any card. If you win more than one Dark Elf in a trick, you still only have to discard one card of another faction.' },

  // Fantasmas
  faction_fantasmas_title: { es: 'Fantasmas', en: 'Ghosts' },
  faction_fantasmas_box: { es: 'Promo', en: 'Promo' },
  faction_fantasmas_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_fantasmas_power: { es: '<strong>Poder (Fase 1): </strong>Puedes añadir el Fantasma a tu pila de seguidores perdiendo la carta que normalmente adquirirías, tanto si pierdes como si ganas la baza. Si ganas y te quedas con el Fantasma, ponlo en tu pila de seguidores y descarta la carta boca arriba sobre la mesa. Si pierdes y eliges quedarte con el Fantasma, ponlo en tu pila de seguidores y descarta la primera carta del mazo boca abajo (sin mirarla).', en: '<strong>Power (Phase 1): </strong>You may add the Ghost to your followers pile by losing the card you would normally acquire, whether you lose or win the trick. If you win and keep the Ghost, place it in your followers pile and discard the card face up on the table. If you lose and choose to keep the Ghost, place it in your followers pile and discard the first card of the deck face down (without looking).' },

  // Sirenas
  faction_sirenas_title: { es: 'Sirenas', en: 'Mermaids' },
  faction_sirenas_box: { es: 'Promo', en: 'Promo' },
  faction_sirenas_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_sirenas_power: { es: '<strong>Poder (Fase 1): </strong>Cuando obtienes una Sirena para tu pila de simpatizantes, colócala boca arriba. Tus siguientes cartas jugadas obtienen -1/por cada Sirena que haya.', en: '<strong>Power (Phase 1): </strong>When you obtain a Mermaid for your sympathizer pile, place it face up. Your next played cards get -1 per Mermaid present.' },

  // Minotauros
  faction_minotauros_title: { es: 'Minotauros', en: 'Minotaurs' },
  faction_minotauros_box: { es: 'Promo', en: 'Promo' },
  faction_minotauros_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_minotauros_power: { es: '<strong>Poder (Fase 2): </strong>Si eres el líder y ganas la baza jugando un Minotauro, el otro jugador puede devolver la carta que jugó a su mano.', en: '<strong>Power (Phase 2): </strong>If you are the leader and win the trick playing a Minotaur, the other player may return the card they played to their hand.' },

  // Manitas
  faction_manitas_title: { es: 'Manitas', en: 'Gremlins' },
  faction_manitas_box: { es: 'Promo', en: 'Promo' },
  faction_manitas_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_manitas_power: { es: '<strong>Poder (Fase 2): </strong>Si un Manitas gana a otra carta superando su valor en ≥ 4, ¡el Manitas explota! La otra carta se descarta del juego. El jugador que jugó al Manitas sigue considerándose el ganador de la baza.', en: '<strong>Power (Phase 2): </strong>If a Gremlin beats another card by exceeding its value by ≥ 4, the Gremlin explodes! The other card is discarded from the game. The player who played the Gremlin is still considered the winner of the trick.' },

  // Valkirias
  faction_valkirias_title: { es: 'Valkirias', en: 'Valkyries' },
  faction_valkirias_box: { es: 'Promo', en: 'Promo' },
  faction_valkirias_tag: { es: '10 Cartas (3-12)', en: '10 Cards (3-12)' },
  faction_valkirias_power: { es: '<strong>Poder: </strong>Si una Valkiria se juega tras cualquier otra carta de facción y el valor de la Valkiria supera en ≥ 3 al valor de la primera carta, la Valkiria se convierte en una carta de esa otra facción a todos los efectos.', en: '<strong>Power: </strong>If a Valkyrie is played after any other faction card and the Valkyrie\'s value exceeds the first card\'s value by ≥ 3, the Valkyrie becomes a card of that other faction for all purposes.' },

  // Sátiros
  faction_satiros_title: { es: 'Sátiros', en: 'Satyrs' },
  faction_satiros_box: { es: 'Big box', en: 'Big box' },
  faction_satiros_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_satiros_power: { es: '<strong>Poder (Fase 1): </strong>Si la carta por la que los jugadores compiten es un Sátiro, el segundo jugador no tiene que seguir la regla del arrastre. El valor más alto de las cartas jugadas gana la baza, independientemente de la facción que comenzó.', en: '<strong>Power (Phase 1): </strong>If the card players are competing for is a Satyr, the second player does not have to follow the drag rule. The highest value among the played cards wins the trick, regardless of the faction that started.' },

  // Resucitadores
  faction_resucitadores_title: { es: 'Resucitadores', en: 'Resurrectors' },
  faction_resucitadores_box: { es: 'Big box', en: 'Big box' },
  faction_resucitadores_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_resucitadores_power: { es: '<strong>Poder: </strong>Tras la Fase 1, baraja las cartas descartadas para formar un mazo de cementerio. Si en la Fase 2 ganas una baza con un Resucitador, roba una carta del mazo de cementerio y añádela a tu pila de simpatizantes.', en: '<strong>Power: </strong>After Phase 1, shuffle the discarded cards to form a cemetery deck. If in Phase 2 you win a trick with a Resurrector, draw a card from the cemetery deck and add it to your sympathizer pile.' },

  // Autómatas
  faction_automatas_title: { es: 'Autómatas', en: 'Automata' },
  faction_automatas_box: { es: 'V Aniversario', en: 'V Anniversary' },
  faction_automatas_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_automatas_power: { es: '<strong>Poder (Fase 1): </strong>Si ganas una baza con una carta de Autómata, ganas también la siguiente baza de forma automática.', en: '<strong>Power (Phase 1): </strong>If you win a trick with an Automaton card, you also automatically win the next trick.' },

  // Bardos
  faction_bardos_title: { es: 'Bardos', en: 'Bards' },
  faction_bardos_box: { es: 'V Aniversario', en: 'V Anniversary' },
  faction_bardos_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_bardos_power: { es: '<strong>Poder: </strong>El voto de los Bardos lo gana aquel jugador que tenga una mayor cantidad de Bardos de valores consecutivos. En caso de empate, gana el que tenga el Bardo de mayor valor dentro de esta serie.', en: '<strong>Power: </strong>The Bards\' vote is won by the player with the largest number of Bards with consecutive values. In case of a tie, the one with the highest value Bards within that series wins.' },

  // Mapaches
  faction_mapaches_title: { es: 'Mapaches', en: 'Raccoons' },
  faction_mapaches_box: { es: 'V Aniversario', en: 'V Anniversary' },
  faction_mapaches_tag: { es: '14 Cartas (0-13)', en: '14 Cards (0-13)' },
  faction_mapaches_power: { es: '<strong>Poder: </strong>Cada Mapache con <img src="img/factions/Botín.png" alt="Botín" width="20"> (botín) aumenta en 1 el número de cartas de la facción con menos votos que tengas.', en: '<strong>Power: </strong>Each Raccoon with <img src="img/factions/Botín.png" alt="Loot" width="20"> (loot) increases by 1 the number of cards of the faction with the fewest votes you have.' },

  // Grifos
  faction_grifos_title: { es: 'Grifos', en: 'Griffins' },
  faction_grifos_box: { es: 'V Aniversario', en: 'V Anniversary' },
  faction_grifos_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_grifos_power: { es: '<strong>Poder (Fase 2): </strong>Si un jugador con Grifos en su pila de Simpatizantes juega una carta con un valor igual a uno de ellos, su valor aumenta en +5.', en: '<strong>Power (Phase 2): </strong>If a player with Griffins in their Sympathizer pile plays a card with a value equal to one of them, its value increases by +5.' },

  // Vikingos
  faction_vikingos_title: { es: 'Vikingos', en: 'Vikings' },
  faction_vikingos_box: { es: 'V Aniversario', en: 'V Anniversary' },
  faction_vikingos_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_vikingos_power: { es: '<strong>Poder: </strong>Una carta de Vikingo cuenta como dos votos si hay otra carta de cualquier facción el mismo valor en la pila de Simpatizantes.', en: '<strong>Power: </strong>A Viking card counts as two votes if there is another card of any faction with the same value in the Sympathizer pile.' },

  // Campesinos
  faction_campesinos_title: { es: 'Campesinos', en: 'Peasants' },
  faction_campesinos_box: { es: 'V Aniversario', en: 'V Anniversary' },
  faction_campesinos_tag: { es: '13 Cartas (0-12)', en: '13 Cards (0-12)' },
  faction_campesinos_power: { es: '<strong>Poder: </strong>Un Campesino abandona tu reino si no tienes una carta de Realeza del mismo valor o de hasta un máximo de 3 superior.', en: '<strong>Power: </strong>A Peasant leaves your kingdom if you do not have a Royalty card of the same value or up to a maximum of 3 higher.' },

  // Realeza
  faction_realeza_title: { es: 'Realeza', en: 'Royalty' },
  faction_realeza_box: { es: 'V Aniversario', en: 'V Anniversary' },
  faction_realeza_tag: { es: '9 Cartas (4-12)', en: '9 Cards (4-12)' },
  faction_realeza_power: { es: '<strong>Poder: </strong>Un Campesino abandona tu reino si no tienes una carta de Realeza del mismo valor o de hasta un máximo de 3 superior.', en: '<strong>Power: </strong>A Peasant leaves your kingdom if you do not have a Royalty card of the same value or up to a maximum of 3 higher.' },

  // Úrsidos
  faction_ursidos_title: { es: 'Úrsidos', en: 'Ursids' },
  faction_ursidos_box: { es: 'Alianzas', en: 'Alliances' },
  faction_ursidos_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_ursidos_power: { es: '<strong>Poder (Fase 1): </strong>Si ganas una baza con un Úrsido, puedes colocar la siguiente carta revelada en la parte inferior del mazo y sacar una nueva carta.', en: '<strong>Power (Phase 1): </strong>If you win a trick with an Ursid, you may place the next revealed card at the bottom of the deck and draw a new card.' },

  // Insectoides
  faction_insectoides_title: { es: 'Insectoides', en: 'Insectoids' },
  faction_insectoides_box: { es: 'Alianzas', en: 'Alliances' },
  faction_insectoides_tag: { es: '10 Cartas (0-9)', en: '10 Cards (0-9)' },
  faction_insectoides_power: { es: '<strong>Poder: </strong>Al final de la partida, el Insectoide se arrastrará hasta el otro jugador si no tienes otra carta de Insectoide con un valor 1 o 2 puntos inferior o superior.', en: '<strong>Power: </strong>At the end of the game, the Insectoid will crawl to the other player if you do not have another Insectoid card with a value 1 or 2 points lower or higher.' },

  // Sección Héroes
  section_heroes: { es: '🧙 Héroes', en: '🧙 Heroes' },
  heroes_rules_title: { es: 'ⓘ Reglas de los Héroes', en: 'ⓘ Heroes Rules' },
  heroes_rules_1: {
    es: 'Al comienzo de la partida, baraja el mazo de cartas de Héroe y <strong>separa 5</strong> boca abajo. Luego, baraja como siempre el mazo central y retira 5 cartas de la parte superior sin mirar. Añade las 5 cartas de Héroe al mazo central y barájalo. Coloca el mazo en el centro de la mesa y reparte 13 cartas a cada jugador.',
    en: 'At the start of the game, shuffle the Hero card deck and <strong>set aside 5</strong> face down. Then, shuffle the main deck as usual and remove 5 cards from the top without looking. Add the 5 Hero cards to the main deck and shuffle it. Place the deck in the center of the table and deal 13 cards to each player.'
  },
  heroes_rules_2: {
    es: 'Ahora, además de las facciones habituales, hay algunas cartas de Héroe en el mazo. Se juegan y utilizan como cartas normales, pero cada una tiene su propia habilidad única. Al jugarlas, se tienen en cuenta las siguientes reglas:',
    en: 'Now, in addition to the usual factions, there are some Hero cards in the deck. They are played and used as normal cards, but each has its own unique ability. When playing them, the following rules apply:'
  },
  heroes_rules_3: {
    es: 'Si el Héroe es la primera carta jugada, el jugador contrario puede jugar cualquier facción. No hay una facción "líder" para esta baza. Los valores (y cualquier habilidad especial) determinarán al ganador.',
    en: 'If the Hero is the first card played, the opposing player may play any faction. There is no "leader" faction for this trick. Values (and any special abilities) determine the winner.'
  },
  heroes_rules_4: {
    es: 'Si el Héroe es la segunda carta jugada, se considera que pertenece a otra facción. Por lo tanto, la facción líder del oponente sigue teniendo ventaja.',
    en: 'If the Hero is the second card played, it is considered to belong to another faction. Therefore, the opponent\'s leader faction still has the advantage.'
  },
  heroes_rules_5: {
    es: 'Cuando consigues Héroes en la <strong>Fase 2</strong>, no cuentan como una facción específica y no cuentan para la puntuación final de partida (a menos que se indique lo contrario). Los Héroes prevalecen sobre los poderes de las Facciones y Lugares Mágicos, si hubiera conflicto, pero los artefactos prevalecen sobre todos.',
    en: 'When you obtain Heroes in <strong>Phase 2</strong>, they do not count as a specific faction and do not count for the final game score (unless otherwise stated). Heroes override Faction and Magic Location powers if there is a conflict, but Artifacts override all.'
  },

  // Héroes individuales
  hero_bardocantarin_title: { es: 'Bardo Cantarín', en: 'Singing Bard' },
  hero_bardocantarin_box: { es: 'Refuerzos: Mercenarios', en: 'Reinforcements: Mercenaries' },
  hero_bardocantarin_power: { es: '<strong>Poder: </strong>En la siguiente baza serás el líder.', en: '<strong>Power: </strong>In the next trick you will be the leader.' },

  hero_arquerocentauro_title: { es: 'Arquero Centauro', en: 'Centaur Archer' },
  hero_arquerocentauro_box: { es: 'Refuerzos: Mercenarios', en: 'Reinforcements: Mercenaries' },
  hero_arquerocentauro_power: { es: '<strong>Poder: </strong>Si la carta jugada por el Líder es de valor 5 o 6, ganas la baza.', en: '<strong>Power: </strong>If the card played by the Leader has value 5 or 6, you win the trick.' },

  hero_senorinsectos_title: { es: 'Señor de los insectos', en: 'Lord of Insects' },
  hero_senorinsectos_box: { es: 'Refuerzos: Mercenarios', en: 'Reinforcements: Mercenaries' },
  hero_senorinsectos_power: { es: '<strong>Poder: </strong>Si juegas esta carta en la Fase 2, aumenta su valor en +1 por cada Simpatizante que hayas conseguido previamente.', en: '<strong>Power: </strong>If you play this card in Phase 2, increase its value by +1 for each Sympathizer you have previously obtained.' },

  hero_bufon_title: { es: 'Bufón', en: 'Jester' },
  hero_bufon_box: { es: 'Refuerzos: Mercenarios', en: 'Reinforcements: Mercenaries' },
  hero_bufon_power: { es: '<strong>Poder: </strong>Si juegas esta carta después de la de Líder, intercambiáis las cartas. La baza se resuelve con el resultado de las cartas nuevas.', en: '<strong>Power: </strong>If you play this card after the Leader\'s, you swap cards. The trick is resolved with the result of the new cards.' },

  hero_sirena_title: { es: 'Sirena', en: 'Mermaid' },
  hero_sirena_box: { es: 'Refuerzos: Mercenarios', en: 'Reinforcements: Mercenaries' },
  hero_sirena_power: { es: '<strong>Poder: </strong>Si eres el Líder y pierdes al jugar esta carta, toma una carta de la pila de Simpatizantes de tu oponente.', en: '<strong>Power: </strong>If you are the Leader and lose when playing this card, take a card from your opponent\'s Sympathizer pile.' },

  hero_bruja_title: { es: 'Bruja', en: 'Witch' },
  hero_bruja_box: { es: 'Refuerzos: Mercenarios', en: 'Reinforcements: Mercenaries' },
  hero_bruja_power: { es: '<strong>Poder: </strong>Si juegas esta carta siendo el Líder, solo puedes perder contra un número par mayor que 5.', en: '<strong>Power: </strong>If you play this card as the Leader, you can only lose against an even number greater than 5.' },

  hero_minotauro_title: { es: 'Minotauro', en: 'Minotaur' },
  hero_minotauro_box: { es: 'Refuerzos: Mercenarios', en: 'Reinforcements: Mercenaries' },
  hero_minotauro_power: { es: '<strong>Poder: </strong>Si esta es la última carta que juegas en la Fase 1 o 2, ganas automáticamente la baza.', en: '<strong>Power: </strong>If this is the last card you play in Phase 1 or 2, you automatically win the trick.' },

  hero_golempiedra_title: { es: 'Golem de Piedra', en: 'Stone Golem' },
  hero_golempiedra_box: { es: 'Refuerzos: Mercenarios', en: 'Reinforcements: Mercenaries' },
  hero_golempiedra_power: { es: '<strong>Poder: </strong>Si el Líder juega una carta de valor entre 1-4, su carta es descartada y ganas la baza.', en: '<strong>Power: </strong>If the Leader plays a card with value between 1-4, their card is discarded and you win the trick.' },

  hero_nigromante_title: { es: 'Nigromante', en: 'Necromancer' },
  hero_nigromante_box: { es: 'Refuerzos: Mercenarios', en: 'Reinforcements: Mercenaries' },
  hero_nigromante_power: { es: '<strong>Poder: </strong>Puedes intercambiar esta carta de tu mano con una que esté a punto de ser descartada (Fase 1).', en: '<strong>Power: </strong>You may swap this card from your hand with one that is about to be discarded (Phase 1).' },

  hero_ladronvida_title: { es: 'Ladrón de Vida', en: 'Life Thief' },
  hero_ladronvida_box: { es: 'Refuerzos: Mercenarios', en: 'Reinforcements: Mercenaries' },
  hero_ladronvida_power: { es: '<strong>Poder: </strong>Si juegas esta carta después de otra facción, copia las habilidades de esa facción como si perteneciese a ella. No cuenta como esa facción en la puntuación final.', en: '<strong>Power: </strong>If you play this card after another faction, copy that faction\'s abilities as if it belonged to it. It does not count as that faction in the final score.' },

  hero_gargola_title: { es: 'Gárgola', en: 'Gargoyle' },
  hero_gargola_box: { es: 'Refuerzos: Mercenarios', en: 'Reinforcements: Mercenaries' },
  hero_gargola_power: { es: '<strong>Poder: </strong>Si consigues esta carta en la Fase 2, cuenta como dos cartas de cualquier otra facción.', en: '<strong>Power: </strong>If you obtain this card in Phase 2, it counts as two cards of any other faction.' },

  hero_hombrelobo_title: { es: 'Hombre Lobo', en: 'Werewolf' },
  hero_hombrelobo_box: { es: 'Refuerzos: Mercenarios', en: 'Reinforcements: Mercenaries' },
  hero_hombrelobo_power: { es: '<strong>Poder: </strong>Cuando la juegues, puedes cambiar el valor de esta carta a 5 y que cuente como otra facción (no copia sus habilidades).', en: '<strong>Power: </strong>When you play it, you may change this card\'s value to 5 and have it count as another faction (does not copy its abilities).' },

  hero_dinosaurio_title: { es: 'Dinosaurio', en: 'Dinosaur' },
  hero_dinosaurio_box: { es: 'Refuerzos: Mercenarios', en: 'Reinforcements: Mercenaries' },
  hero_dinosaurio_power: { es: '<strong>Poder: </strong>En la Fase 2, puedes devolver esta carta a la mano si pierdes la baza.', en: '<strong>Power: </strong>In Phase 2, you may return this card to your hand if you lose the trick.' },

  hero_reinavampira_title: { es: 'Reina Vampira', en: 'Vampire Queen' },
  hero_reinavampira_box: { es: 'Refuerzos: Mercenarios', en: 'Reinforcements: Mercenaries' },
  hero_reinavampira_power: { es: '<strong>Poder: </strong>Todas las cartas jugadas contra esta carta pierden sus poderes especiales.', en: '<strong>Power: </strong>All cards played against this card lose their special powers.' },

  hero_ent_title: { es: 'Ent', en: 'Ent' },
  hero_ent_box: { es: 'Refuerzos: Mercenarios', en: 'Reinforcements: Mercenaries' },
  hero_ent_power: { es: '<strong>Poder: </strong>Si juegas esta carta en la Fase 2, puedes convertirla en una facción de la que tengas al menos dos cartas en tu pila de Simpatizantes.', en: '<strong>Power: </strong>If you play this card in Phase 2, you may turn it into a faction of which you have at least two cards in your Sympathizer pile.' },

  hero_kraken_title: { es: 'Kraken', en: 'Kraken' },
  hero_kraken_box: { es: 'Refuerzos: Mercenarios', en: 'Reinforcements: Mercenaries' },
  hero_kraken_power: { es: '<strong>Poder: </strong>Si ganas la baza con esta carta en la Fase 2, toma una carta aleatoria de la mano de tu oponente. Luego, dale una carta de tu mano a tu elección (no puede ser la que le has robado).', en: '<strong>Power: </strong>If you win the trick with this card in Phase 2, take a random card from your opponent\'s hand. Then, give them a card of your choice from your hand (cannot be the one you stole).' },

  hero_lamuerte_title: { es: 'La Muerte', en: 'Death' },
  hero_lamuerte_box: { es: 'Refuerzos: Mercenarios', en: 'Reinforcements: Mercenaries' },
  hero_lamuerte_power: { es: '<strong>Poder: </strong>Si juegas esta carta en la Fase 2, el ganador no se lleva Simpatizantes. Las cartas se descartan. El jugador que hubiese ganado la baza es el Líder en la siguiente.', en: '<strong>Power: </strong>If you play this card in Phase 2, the winner does not take Sympathizers. The cards are discarded. The player who would have won the trick is the Leader in the next.' },

  hero_guerreroinvencible_title: { es: 'Guerrero Invencible', en: 'Invincible Warrior' },
  hero_guerreroinvencible_box: { es: 'Refuerzos: Mercenarios', en: 'Reinforcements: Mercenaries' },
  hero_guerreroinvencible_power: { es: '<strong>Poder: </strong>No tiene poderes especiales, pero tiene un valor alto.', en: '<strong>Power: </strong>No special powers, but has a high value.' },

  hero_reylich_title: { es: 'Rey Liche', en: 'Lich King' },
  hero_reylich_box: { es: 'Refuerzos: Terror', en: 'Reinforcements: Terror' },
  hero_reylich_power: { es: '<strong>Poder: </strong>El valor de la carta jugada después del Rey Liche disminuye en -3.', en: '<strong>Power: </strong>The value of the card played after the Lich King decreases by -3.' },

  hero_esqueleto_title: { es: 'Esqueleto', en: 'Skeleton' },
  hero_esqueleto_box: { es: 'Refuerzos: Terror', en: 'Reinforcements: Terror' },
  hero_esqueleto_power: { es: '<strong>Poder: </strong>Si ganas una baza con el Esqueleto, puedes tomar una carta aleatoria de la pila de descarte y llevarla a tu mano.', en: '<strong>Power: </strong>If you win a trick with the Skeleton, you may take a random card from the discard pile and add it to your hand.' },

  hero_brujo_title: { es: 'Brujo', en: 'Warlock' },
  hero_brujo_box: { es: 'Refuerzos: Terror', en: 'Reinforcements: Terror' },
  hero_brujo_power: { es: '<strong>Poder: </strong>Si juegas el Brujo después de una carta con un valor impar, ganas la baza.', en: '<strong>Power: </strong>If you play the Warlock after a card with an odd value, you win the trick.' },

  hero_cthulhu_title: { es: 'Cthulhu', en: 'Cthulhu' },
  hero_cthulhu_box: { es: 'Refuerzos: Terror', en: 'Reinforcements: Terror' },
  hero_cthulhu_power: { es: '<strong>Poder: </strong>Si juegas a Cthulhu en la Fase 1, devuelve a la caja las dos primeras cartas del mazo central. Si lo juegas en la Fase 2, ambos jugadores deben descartar 1 carta de su mano, a su elección.', en: '<strong>Power: </strong>If you play Cthulhu in Phase 1, return the first two cards of the main deck to the box. If you play it in Phase 2, both players must discard 1 card from their hand, of their choice.' },

  hero_momia_title: { es: 'Momia', en: 'Mummy' },
  hero_momia_box: { es: 'Refuerzos: Terror', en: 'Reinforcements: Terror' },
  hero_momia_power: { es: '<strong>Poder: </strong>Si juegas la Momia después de una carta con valor 7 o superior, ganas la baza.', en: '<strong>Power: </strong>If you play the Mummy after a card with value 7 or higher, you win the trick.' },

  hero_cubogelatinoso_title: { es: 'Cubo Gelatinoso', en: 'Gelatinous Cube' },
  hero_cubogelatinoso_box: { es: 'Refuerzos: Terror', en: 'Reinforcements: Terror' },
  hero_cubogelatinoso_power: { es: '<strong>Poder: </strong>En la Fase 2: Si el Cubo Gelatinoso es la segunda carta jugada en una baza, coloca la carta del líder debajo de ella. El ganador de la siguiente baza consigue también el Cubo Gelatinoso y la carta que se encuentra debajo.', en: '<strong>Power: </strong>In Phase 2: If the Gelatinous Cube is the second card played in a trick, place the leader\'s card under it. The winner of the next trick also gets the Gelatinous Cube and the card underneath.' },

  // Sección Artefactos
  section_artifacts: { es: '💎 Artefactos', en: '💎 Artifacts' },
  artifacts_rules_title: { es: 'ⓘ Reglas de los Artefactos', en: 'ⓘ Artifacts Rules' },
  artifacts_rules_1: {
    es: 'Al comienzo de la partida, baraja el mazo de cartas de Artefacto. Reparte 3 cartas de Artefacto a cada jugador, boca abajo.<br>Devuelve las demás a la caja, ya que no se usarán en esta partida. Durante la partida, los jugadores pueden jugar sus cartas de Artefacto. Las reglas indican cuándo y cómo se pueden jugar. Cada una de estas cartas tendrá un poder especial asociado, y si las juegas con astucia ¡pueden proporcionarte una buena ventaja! Las cartas de Artefacto no van a tu mano.<br>Un jugador puede utilizar un Artefacto en cualquier momento. Una vez jugado, se descarta. Los poderes de los Artefactos prevalecen sobre los poderes de los Héroes, Facciones y Lugares Mágicos, si hubiera conflicto.',
    en: 'At the start of the game, shuffle the Artifact deck. Deal 3 Artifact cards to each player, face down.<br>Return the rest to the box, as they will not be used in this game. During the game, players may play their Artifact cards. The rules indicate when and how they can be played. Each of these cards will have a special power associated, and if you play them cleverly they can give you a good advantage! Artifact cards do not go to your hand.<br>A player may use an Artifact at any time. Once played, it is discarded. Artifact powers override Hero, Faction and Magic Location powers if there is a conflict.'
  },

  // Artefactos individuales
  artifact_coronaluz_title: { es: 'Corona de la Luz', en: 'Crown of Light' },
  artifact_coronaluz_box: { es: 'Refuerzos: Magia', en: 'Reinforcements: Magic' },
  artifact_coronaluz_power: { es: '<strong>Poder: </strong>Juega este artefacto al final de la partida. Añádelo a cualquiera de tus facciones. Cuenta como una carta de valor 5 de esa facción.', en: '<strong>Power: </strong>Play this artifact at the end of the game. Add it to any of your factions. It counts as a value 5 card of that faction.' },

  artifact_espadaserpiente_title: { es: 'Espada de la Serpiente', en: 'Serpent Sword' },
  artifact_espadaserpiente_box: { es: 'Refuerzos: Magia', en: 'Reinforcements: Magic' },
  artifact_espadaserpiente_power: { es: '<strong>Poder: </strong>Juega este artefacto cuando juegues una carta de tu mano. El valor de esa carta aumenta en +3.', en: '<strong>Power: </strong>Play this artifact when you play a card from your hand. That card\'s value increases by +3.' },

  artifact_cuernosilencio_title: { es: 'Cuerno del Silencio', en: 'Horn of Silence' },
  artifact_cuernosilencio_box: { es: 'Refuerzos: Magia', en: 'Reinforcements: Magic' },
  artifact_cuernosilencio_power: { es: '<strong>Poder: </strong>Juega este artefacto en la Fase 2, después de que cada jugador haya jugado una carta. Cada jugador toma inmediatamente la carta que ha jugado y la coloca en su pila de Simpatizantes, independientemente del resultado de la baza. El jugador que hubiese ganado la baza será el Líder de la siguiente baza.', en: '<strong>Power: </strong>Play this artifact in Phase 2, after each player has played a card. Each player immediately takes the card they played and places it in their Sympathizer pile, regardless of the trick result. The player who would have won the trick becomes the Leader of the next trick.' },

  artifact_lanzavenganza_title: { es: 'Lanza de la Venganza', en: 'Spear of Vengeance' },
  artifact_lanzavenganza_box: { es: 'Refuerzos: Magia', en: 'Reinforcements: Magic' },
  artifact_lanzavenganza_power: { es: '<strong>Poder: </strong>Juega este artefacto al perder una baza en la Fase 2. Descarta una de las cartas jugadas antes de que el ganador se lleve los Simpatizantes.', en: '<strong>Power: </strong>Play this artifact when you lose a trick in Phase 2. Discard one of the played cards before the winner takes the Sympathizers.' },

  artifact_bolacristal_title: { es: 'Bola de Cristal', en: 'Crystal Ball' },
  artifact_bolacristal_box: { es: 'Refuerzos: Magia', en: 'Reinforcements: Magic' },
  artifact_bolacristal_power: { es: '<strong>Poder: </strong>Juega este artefacto en la Fase 1, cuando vayas a robar una carta de la parte superior del mazo (al perder la baza). En vez de eso, roba 3 cartas y elige 1. Devuelve el resto al mazo y barájalo.', en: '<strong>Power: </strong>Play this artifact in Phase 1, when you are about to draw a card from the top of the deck (when losing the trick). Instead, draw 3 cards and choose 1. Return the rest to the deck and shuffle.' },

  artifact_cristalilusos_title: { es: 'Cristal de los Ilusos', en: 'Crystal of Illusionists' },
  artifact_cristalilusos_box: { es: 'Refuerzos: Magia', en: 'Reinforcements: Magic' },
  artifact_cristalilusos_power: { es: '<strong>Poder: </strong>Juega este artefacto en la Fase 2, en el momento de colocar las cartas en tu pila de Simpatizantes (al ganar la baza). Intercambia una de las cartas que fueses a colocar con una de tu mano.', en: '<strong>Power: </strong>Play this artifact in Phase 2, when placing cards in your Sympathizer pile (when winning the trick). Swap one of the cards you would place with one from your hand.' },

  artifact_caballomago_title: { es: 'Caballo del Mago', en: 'Mage\'s Horse' },
  artifact_caballomago_box: { es: 'Refuerzos: Magia', en: 'Reinforcements: Magic' },
  artifact_caballomago_power: { es: '<strong>Poder: </strong>Juega este artefacto después de que cada jugador haya jugado una carta. Intercambia la carta que has jugado con una de tu mano. Luego, la baza se resuelve como de costumbre.', en: '<strong>Power: </strong>Play this artifact after each player has played a card. Swap the card you played with one from your hand. Then, the trick resolves as usual.' },

  artifact_botasvoladoras_title: { es: 'Botas Voladoras', en: 'Flying Boots' },
  artifact_botasvoladoras_box: { es: 'Refuerzos: Magia', en: 'Reinforcements: Magic' },
  artifact_botasvoladoras_power: { es: '<strong>Poder: </strong>Juega este artefacto en cualquier momento. El valor de las siguientes dos cartas que juegues aumenta en +2.', en: '<strong>Power: </strong>Play this artifact at any time. The value of your next two played cards increases by +2.' },

  artifact_piedrarunica_title: { es: 'Piedra Rúnica Olvidada', en: 'Forgotten Rune Stone' },
  artifact_piedrarunica_box: { es: 'Refuerzos: Magia', en: 'Reinforcements: Magic' },
  artifact_piedrarunica_power: { es: '<strong>Poder: </strong>Juega este artefacto en la Fase 2, en el momento de colocar las cartas en tu pila de Simpatizantes (al ganar la baza). Descarta una de esas cartas y coloca este artefacto debajo de una carta de Simpatizante que hayas conseguido previamente. La Piedra Rúnica Olvidada cuenta como una carta adicional de esa facción.', en: '<strong>Power: </strong>Play this artifact in Phase 2, when placing cards in your Sympathizer pile (when winning the trick). Discard one of those cards and place this artifact under a Sympathizer card you previously obtained. The Forgotten Rune Stone counts as an additional card of that faction.' },

  artifact_linternaeterna_title: { es: 'Linterna Eterna', en: 'Eternal Lantern' },
  artifact_linternaeterna_box: { es: 'Refuerzos: Magia', en: 'Reinforcements: Magic' },
  artifact_linternaeterna_power: { es: '<strong>Poder: </strong>Juega este artefacto después de ganar una baza en la Fase 2. Roba 3 cartas de la mano de tu oponente, míralas y devuélveselas. Tu oponente debe tener al menos 5 cartas en su mano para que puedas jugar este artefacto.', en: '<strong>Power: </strong>Play this artifact after winning a trick in Phase 2. Draw 3 cards from your opponent\'s hand, look at them, and return them. Your opponent must have at least 5 cards in hand for you to play this artifact.' },

  artifact_bastonorden_title: { es: 'Bastón del Orden', en: 'Staff of Order' },
  artifact_bastonorden_box: { es: 'Refuerzos: Magia', en: 'Reinforcements: Magic' },
  artifact_bastonorden_power: { es: '<strong>Poder: </strong>Juega este artefacto después de haber perdido una baza. Serás el Líder en la siguiente baza.', en: '<strong>Power: </strong>Play this artifact after losing a trick. You will be the Leader in the next trick.' },

  artifact_collarescarcha_title: { es: 'Collar de Escarcha', en: 'Frost Necklace' },
  artifact_collarescarcha_box: { es: 'Refuerzos: Magia', en: 'Reinforcements: Magic' },
  artifact_collarescarcha_power: { es: '<strong>Poder: </strong>Juega este artefacto en la Fase 2, después de que cada jugador haya jugado una carta. Coloca esas cartas a un lado y jugad otra baza (el líder sigue siendo el mismo). El ganador de esta segunda baza será quien consiga las cartas de ambas bazas.', en: '<strong>Power: </strong>Play this artifact in Phase 2, after each player has played a card. Set those cards aside and play another trick (the leader remains the same). The winner of this second trick gets the cards from both tricks.' },

  artifact_relojarena_title: { es: 'Reloj de Arena Divino', en: 'Divine Hourglass' },
  artifact_relojarena_box: { es: 'Refuerzos: Magia', en: 'Reinforcements: Magic' },
  artifact_relojarena_power: { es: '<strong>Poder: </strong>Juega este artefacto después de que cada jugador haya jugado una carta. Ambos jugadores se llevan sus cartas jugadas de vuelta a su mano y se juega otra baza.', en: '<strong>Power: </strong>Play this artifact after each player has played a card. Both players return their played cards to their hand and play another trick.' },

  artifact_escudovelo_title: { es: 'Escudo del Velo', en: 'Shield of the Veil' },
  artifact_escudovelo_box: { es: 'Refuerzos: Magia', en: 'Reinforcements: Magic' },
  artifact_escudovelo_power: { es: '<strong>Poder: </strong>Juega este artefacto cuando tu oponente juegue una carta. El valor de su carta disminuye en -3.', en: '<strong>Power: </strong>Play this artifact when your opponent plays a card. The value of their card decreases by -3.' },

  artifact_jarrarreyes_title: { es: 'Jarra de los Reyes', en: 'Jug of Kings' },
  artifact_jarrarreyes_box: { es: 'Refuerzos: Magia', en: 'Reinforcements: Magic' },
  artifact_jarrarreyes_power: { es: '<strong>Poder: </strong>Juega este artefacto cuando juegues una carta de tu mano. Esa carta cambia a una facción de tu elección.', en: '<strong>Power: </strong>Play this artifact when you play a card from your hand. That card changes to a faction of your choice.' },

  artifact_hachanubes_title: { es: 'Hacha de las Nubes', en: 'Cloud Axe' },
  artifact_hachanubes_box: { es: 'Refuerzos: Magia', en: 'Reinforcements: Magic' },
  artifact_hachanubes_power: { es: '<strong>Poder: </strong>Juega este artefacto en cualquier momento. El valor de las siguientes dos cartas que juegue tu oponente disminuyen en -2.', en: '<strong>Power: </strong>Play this artifact at any time. The value of your opponent\'s next two played cards decreases by -2.' },

  artifact_arcoenamorados_title: { es: 'Arco de los Enamorados', en: 'Bow of Lovers' },
  artifact_arcoenamorados_box: { es: 'Refuerzos: Magia', en: 'Reinforcements: Magic' },
  artifact_arcoenamorados_power: { es: '<strong>Poder: </strong>Juega este artefacto cuando seas el Líder de la baza. Ambos jugadores deben jugar dos cartas en vez de una. La primera carta que juegas es la facción líder, y tu segunda carta debe seguir la facción, si es posible. Todas las cartas cuentan para el resultado de la baza.', en: '<strong>Power: </strong>Play this artifact when you are the Leader of the trick. Both players must play two cards instead of one. The first card you play is the leader faction, and your second card must follow the faction, if possible. All cards count for the trick result.' },

  artifact_anillonocturno_title: { es: 'Anillo Nocturno', en: 'Night Ring' },
  artifact_anillonocturno_box: { es: 'Refuerzos: Magia', en: 'Reinforcements: Magic' },
  artifact_anillonocturno_power: { es: '<strong>Poder: </strong>Juega este artefacto cuando juegues tu carta no siendo Líder. No estás obligado a seguir la facción líder, y no necesitas la misma facción para ganar, solo el número más alto.', en: '<strong>Power: </strong>Play this artifact when you play your card as non-Leader. You are not forced to follow the leader faction, and you do not need the same faction to win, only the highest number.' },

  artifact_mayalalba_title: { es: 'Mayal del Alba', en: 'Flail of Dawn' },
  artifact_mayalalba_box: { es: 'Refuerzos: Hielo', en: 'Reinforcements: Ice' },
  artifact_mayalalba_power: { es: '<strong>Poder: </strong>Juega esta carta al comienzo de la Fase 2. Tu oponente debe colocar una carta de su mano (a su elección y boca abajo) debajo de esta carta. Esa será la carta que deberá jugar en la última baza.', en: '<strong>Power: </strong>Play this card at the start of Phase 2. Your opponent must place a card from their hand (of their choice, face down) under this card. That will be the card they must play in the last trick.' },

  artifact_capacaza_title: { es: 'Capa de Caza', en: 'Hunting Cloak' },
  artifact_capacaza_box: { es: 'Refuerzos: Hielo', en: 'Reinforcements: Ice' },
  artifact_capacaza_power: { es: '<strong>Poder: </strong>Después de jugar carta como Líder, toma una carta aleatoria de la mano de tu oponente. Esa será la carta que juegue en esta baza.', en: '<strong>Power: </strong>After playing a card as Leader, take a random card from your opponent\'s hand. That will be the card they play in this trick.' },

  artifact_dagarey_title: { es: 'Daga del Rey', en: 'King\'s Dagger' },
  artifact_dagarey_box: { es: 'Refuerzos: Hielo', en: 'Reinforcements: Ice' },
  artifact_dagarey_power: { es: '<strong>Poder: </strong>Si tu oponente juega una carta con valor 5, puedes jugar esta carta para inmediatamente colocar la suya en tu pila de Simpatizantes. Tu oponente puede jugar otra carta en su lugar.', en: '<strong>Power: </strong>If your opponent plays a card with value 5, you may play this card to immediately place theirs in your Sympathizer pile. Your opponent may play another card instead.' },

  artifact_antorcha_title: { es: 'Antorcha del Merodeador', en: 'Marauder\'s Torch' },
  artifact_antorcha_box: { es: 'Refuerzos: Hielo', en: 'Reinforcements: Ice' },
  artifact_antorcha_power: { es: '<strong>Poder: </strong>Juega esta carta en la Fase 1. Durante las dos próximas bazas de la Fase 1, el jugador que tome la carta de la parte superior del mazo debe revelársela al otro jugador.', en: '<strong>Power: </strong>Play this card in Phase 1. During the next two tricks of Phase 1, the player who draws the top card of the deck must reveal it to the other player.' },

  artifact_lampara_title: { es: 'Lámpara Mágica', en: 'Magic Lamp' },
  artifact_lampara_box: { es: 'Refuerzos: Hielo', en: 'Reinforcements: Ice' },
  artifact_lampara_power: { es: '<strong>Poder: </strong>En la Fase 2, si eres el Líder, puedes jugar esta carta y anunciar qué carta quieres que juegue tu oponente (la facción y el número). Si tiene la carta anunciada, debe jugarla incluso si no sigue a la facción Líder. Si no tiene la carta anunciada, puede jugar cualquier carta y ganará automáticamente la baza.', en: '<strong>Power: </strong>In Phase 2, if you are the Leader, you may play this card and announce which card you want your opponent to play (faction and number). If they have the announced card, they must play it even if it does not follow the Leader faction. If they do not have the announced card, they may play any card and will automatically win the trick.' },

  artifact_libroapostador_title: { es: 'Libro del Apostador', en: 'Gambler\'s Book' },
  artifact_libroapostador_box: { es: 'Refuerzos: Hielo', en: 'Reinforcements: Ice' },
  artifact_libroapostador_power: { es: '<strong>Poder: </strong>Juega esta carta al inicio de la Fase 2, después de llevarte a la mano las cartas de Seguidores. Descarta una carta aleatoria de tu mano, y toma una carta a tu elección de la pila de descarte.', en: '<strong>Power: </strong>Play this card at the start of Phase 2, after taking the Follower cards to your hand. Discard a random card from your hand, and take a card of your choice from the discard pile.' },

  artifact_catalejo_title: { es: 'Catalejo', en: 'Spyglass' },
  artifact_catalejo_box: { es: 'Refuerzos: Hielo', en: 'Reinforcements: Ice' },
  artifact_catalejo_power: { es: '<strong>Poder: </strong>Juega esta carta en la Fase 2, después de ganar una baza. Descarta una carta que fueses a colocar en tu pila de Simpatizantes, toma una carta a tu elección de la pila de descarte y colócala en tu pila de Simpatizantes.', en: '<strong>Power: </strong>Play this card in Phase 2, after winning a trick. Discard a card you would place in your Sympathizer pile, take a card of your choice from the discard pile, and place it in your Sympathizer pile.' },

  artifact_varita_title: { es: 'Varita Mágica', en: 'Magic Wand' },
  artifact_varita_box: { es: 'Refuerzos: Hielo', en: 'Reinforcements: Ice' },
  artifact_varita_power: { es: '<strong>Poder: </strong>Juégala después de jugar tu carta. Puedes ajustar el valor de tu carta en 2, hacia arriba o hacia abajo.', en: '<strong>Power: </strong>Play it after playing your card. You may adjust your card\'s value by 2, up or down.' },

  artifact_cuerda_title: { es: 'Cuerda Interminable', en: 'Endless Rope' },
  artifact_cuerda_box: { es: 'Refuerzos: Hielo', en: 'Reinforcements: Ice' },
  artifact_cuerda_power: { es: '<strong>Poder: </strong>Juega esta carta en la Fase 2. Toma una carta de tu pila de Simpatizantes y añádela a tu mano.', en: '<strong>Power: </strong>Play this card in Phase 2. Take a card from your Sympathizer pile and add it to your hand.' },

  artifact_botella_title: { es: 'Botella sin Fondo', en: 'Bottomless Bottle' },
  artifact_botella_box: { es: 'Refuerzos: Hielo', en: 'Reinforcements: Ice' },
  artifact_botella_power: { es: '<strong>Poder: </strong>Juega esta carta si eres el Líder. La carta de menor valor gana la baza.', en: '<strong>Power: </strong>Play this card if you are the Leader. The lowest value card wins the trick.' },

  artifact_frasco_title: { es: 'Frasco de Lágrimas', en: 'Tears Flask' },
  artifact_frasco_box: { es: 'Refuerzos: Hielo', en: 'Reinforcements: Ice' },
  artifact_frasco_power: { es: '<strong>Poder: </strong>Juega esta carta si pierdes 3 bazas seguidas. Tu siguiente carta aumenta en +9.', en: '<strong>Power: </strong>Play this card if you lose 3 tricks in a row. Your next card increases by +9.' },

  artifact_mascara_title: { es: 'Máscara de la Oscuridad', en: 'Mask of Darkness' },
  artifact_mascara_box: { es: 'Refuerzos: Hielo', en: 'Reinforcements: Ice' },
  artifact_mascara_power: { es: '<strong>Poder: </strong>En las dos bazas siguientes, el Líder juega su carta boca abajo. Después de que su oponente haya jugado su carta, la carta del Líder es revelada.', en: '<strong>Power: </strong>In the next two tricks, the Leader plays their card face down. After their opponent has played their card, the Leader\'s card is revealed.' },

  artifact_dados_title: { es: 'Dados del Apostador', en: 'Gambler\'s Dice' },
  artifact_dados_box: { es: 'Refuerzos: Hielo', en: 'Reinforcements: Ice' },
  artifact_dados_power: { es: '<strong>Poder: </strong>Juega esta carta antes de que el Líder juegue la suya. Ambos jugadores barajan su mano y juegan una carta al azar.', en: '<strong>Power: </strong>Play this card before the Leader plays theirs. Both players shuffle their hand and play a random card.' },

  artifact_espejo_title: { es: 'Espejo de las Mentiras', en: 'Mirror of Lies' },
  artifact_espejo_box: { es: 'Refuerzos: Hielo', en: 'Reinforcements: Ice' },
  artifact_espejo_power: { es: '<strong>Poder: </strong>Juega esta carta después de que juegues tu carta. Si tu carta tiene un valor de 5 o menos, auméntalo en +5. Si tiene un valor mayor que 5, disminúyelo en -5.', en: '<strong>Power: </strong>Play this card after you play your card. If your card has a value of 5 or less, increase it by +5. If it has a value greater than 5, decrease it by -5.' },

  artifact_librorecuerdos_title: { es: 'Libro de Recuerdos', en: 'Book of Memories' },
  artifact_librorecuerdos_box: { es: 'Refuerzos: Hielo', en: 'Reinforcements: Ice' },
  artifact_librorecuerdos_power: { es: '<strong>Poder: </strong>Juega esta carta en la Fase 2, antes de que juegues tu carta como Líder. Juega una carta de tu pila de Simpatizantes en vez de tu mano.', en: '<strong>Power: </strong>Play this card in Phase 2, before you play your card as Leader. Play a card from your Sympathizer pile instead of your hand.' },

  artifact_espadahielo_title: { es: 'Espada de Hielo', en: 'Ice Sword' },
  artifact_espadahielo_box: { es: 'Refuerzos: Hielo', en: 'Reinforcements: Ice' },
  artifact_espadahielo_power: { es: '<strong>Poder: </strong>Juega esta carta después de que ambos jugadores hayáis jugado vuestras cartas, pero antes de resolverlas. Ambas cartas se quedan congeladas en la mesa y sus habilidades especiales se ignoran. El Líder de esta baza es el Líder de la siguiente. Añade los valores de las cartas congeladas a las nuevas cartas jugadas. El ganador obtiene todas las cartas.', en: '<strong>Power: </strong>Play this card after both players have played their cards, but before resolving them. Both cards remain frozen on the table and their special abilities are ignored. The Leader of this trick is the Leader of the next. Add the values of the frozen cards to the newly played cards. The winner gets all cards.' },

  // Sección Localizaciones
  section_locations: { es: '🗺️ Localizaciones', en: '🗺️ Locations' },
  locations_rules_title: { es: 'ⓘ Reglas de los Lugares Mágicos', en: 'ⓘ Magic Locations Rules' },
  locations_rules_1: {
    es: 'Hay dos tipos de Lugares Mágicos: los "Edificios", con pergamino azul, y los "Escenarios", con pergamino negro. Al preparar la partida, baraja los dos tipos de Lugares Mágicos por separado y forma dos mazos.<br>Puedes jugar esta expansión de 3 formas diferentes:',
    en: 'There are two types of Magic Locations: "Buildings", with blue scroll, and "Scenarios", with black scroll. When setting up the game, shuffle the two types of Magic Locations separately and form two decks.<br>You can play this expansion in 3 different ways:'
  },
  locations_rules_2: {
    es: 'Roba una carta de Edificio al comienzo de la partida y déjala boca arriba durante toda la partida. Aplica el efecto detallado en la carta. Esto normalmente cambiará las reglas de fin de la partida.',
    en: 'Draw a Building card at the start of the game and leave it face up throughout the game. Apply the effect detailed on the card. This will usually change the end‑game rules.'
  },
  locations_rules_3: {
    es: 'Roba una carta de Escenario al comienzo de la partida y déjala boca arriba durante toda la partida. Aplica el efecto detallado en la carta. Esto normalmente cambiará la forma en la que las cartas interactúen entre sí.',
    en: 'Draw a Scenario card at the start of the game and leave it face up throughout the game. Apply the effect detailed on the card. This will usually change how cards interact with each other.'
  },
  locations_rules_4: {
    es: 'Puedes robar tanto una carta de Escenario como de Edificio y aplicar ambos efectos durante toda la partida.',
    en: 'You may draw both a Scenario and a Building card and apply both effects throughout the game.'
  },
  locations_rules_5: {
    es: 'Los efectos de los Lugares Mágicos son superados por los poderes de Facciones, Héroes y Artefactos.',
    en: 'Magic Location effects are overridden by Faction, Hero and Artifact powers.'
  },

  // Localizaciones individuales
  location_mazmorra_title: { es: 'La Mazmorra', en: 'The Dungeon' },
  location_mazmorra_box: { es: 'Refuerzos: Mapas', en: 'Reinforcements: Maps' },
  location_mazmorra_power: { es: '<strong>Poder: </strong>El jugador que gane la última baza de la Fase 1, y el que gane la última baza de la Fase 2, se llevan el voto de una facción adicional. Por lo tanto, para la puntuación final, contamos con 2 facciones adicionales.', en: '<strong>Power: </strong>The player who wins the last trick of Phase 1, and the one who wins the last trick of Phase 2, each gain the vote of an additional faction. Therefore, for the final score, we count 2 additional factions.' },

  location_faro_title: { es: 'El Faro', en: 'The Lighthouse' },
  location_faro_box: { es: 'Refuerzos: Mapas', en: 'Reinforcements: Maps' },
  location_faro_power: { es: '<strong>Poder: </strong>En la Fase 2: El primer jugador en conseguir 3 cartas de una facción gana su voto (los Cíclopes se puntúan como de costumbre).', en: '<strong>Power: </strong>In Phase 2: The first player to get 3 cards of a faction wins its vote (Cyclopes are scored as usual).' },

  location_piramide_title: { es: 'La Pirámide', en: 'The Pyramid' },
  location_piramide_box: { es: 'Refuerzos: Mapas', en: 'Reinforcements: Maps' },
  location_piramide_power: { es: '<strong>Poder: </strong>Al final de la partida: Debéis descartar todas las cartas conseguidas con valor 3 o menos. Luego, se puntúa como de costumbre.', en: '<strong>Power: </strong>At the end of the game: You must discard all cards obtained with value 3 or less. Then, score as usual.' },

  location_monasterio_title: { es: 'El Monasterio', en: 'The Monastery' },
  location_monasterio_box: { es: 'Refuerzos: Mapas', en: 'Reinforcements: Maps' },
  location_monasterio_power: { es: '<strong>Poder: </strong>Al final de la partida: Cada jugador cuenta el total de cartas en su pila de Simpatizantes. Si un jugador ha conseguido el doble (o más) de cartas que su oponente, pierde automáticamente la partida. En caso contrario, se puntúa como de costumbre.', en: '<strong>Power: </strong>At the end of the game: Each player counts the total number of cards in their Sympathizer pile. If a player has obtained twice (or more) cards than their opponent, they automatically lose the game. Otherwise, score as usual.' },

  location_puente_title: { es: 'El Puente', en: 'The Bridge' },
  location_puente_box: { es: 'Refuerzos: Mapas', en: 'Reinforcements: Maps' },
  location_puente_power: { es: '<strong>Poder: </strong>Al final de la partida: El ganador será quien haya conseguido más sets completos de las 5 facciones (un set completo consta de 1 carta de cada facción). En caso de empate, se puntúa como de costumbre.', en: '<strong>Power: </strong>At the end of the game: The winner will be the one who has obtained the most complete sets of the 5 factions (a complete set consists of 1 card from each faction). In case of a tie, score as usual.' },

  location_fortaleza_title: { es: 'La Fortaleza', en: 'The Fortress' },
  location_fortaleza_box: { es: 'Refuerzos: Mapas', en: 'Reinforcements: Maps' },
  location_fortaleza_power: { es: '<strong>Poder: </strong>Al final de la partida: Si tienes más de 5 cartas de una facción, debes descartar 4 cartas de esa facción (las de menor valor) antes de puntuar.', en: '<strong>Power: </strong>At the end of the game: If you have more than 5 cards of a faction, you must discard 4 cards of that faction (the lowest value ones) before scoring.' },

  location_torre_title: { es: 'La Torre', en: 'The Tower' },
  location_torre_box: { es: 'Refuerzos: Mapas', en: 'Reinforcements: Maps' },
  location_torre_power: { es: '<strong>Poder: </strong>Al final de la partida: Suma los valores de las cartas de cada facción para determinar quién gana su voto. En caso de empate, la cantidad de cartas determina al ganador del voto.', en: '<strong>Power: </strong>At the end of the game: Sum the values of the cards of each faction to determine who wins its vote. In case of a tie, the number of cards determines the winner of the vote.' },

  location_ruinas_title: { es: 'Las Ruinas', en: 'The Ruins' },
  location_ruinas_box: { es: 'Refuerzos: Mapas', en: 'Reinforcements: Maps' },
  location_ruinas_power: { es: '<strong>Poder: </strong>Al final de la partida: Todas las cartas conseguidas con números impares se descartan. Luego, se puntúa como de costumbre.', en: '<strong>Power: </strong>At the end of the game: All cards obtained with odd numbers are discarded. Then, score as usual.' },

  location_castillo_title: { es: 'El Castillo', en: 'The Castle' },
  location_castillo_box: { es: 'Refuerzos: Mapas', en: 'Reinforcements: Maps' },
  location_castillo_power: { es: '<strong>Poder: </strong>Al final de la partida: El jugador que haya conseguido la mayor cantidad de Simpatizantes es el ganador. En caso de empate, se puntúa como de costumbre.', en: '<strong>Power: </strong>At the end of the game: The player who has obtained the largest number of Sympathizers is the winner. In case of a tie, score as usual.' },

  location_tierrascultivo_title: { es: 'Las Tierras de Cultivo', en: 'The Farmlands' },
  location_tierrascultivo_box: { es: 'Refuerzos: Mapas', en: 'Reinforcements: Maps' },
  location_tierrascultivo_power: { es: '<strong>Poder: </strong>Durante la partida: El valor 2 se considera el valor más alto de cada facción.', en: '<strong>Power: </strong>During the game: Value 2 is considered the highest value of each faction.' },

  location_costa_title: { es: 'La Costa', en: 'The Coast' },
  location_costa_box: { es: 'Refuerzos: Mapas', en: 'Reinforcements: Maps' },
  location_costa_power: { es: '<strong>Poder: </strong>Durante la Fase 1: El jugador que pierde la baza obtiene la carta del centro de la mesa, en lugar del ganador.', en: '<strong>Power: </strong>During Phase 1: The player who loses the trick gets the center card instead of the winner.' },

  location_picosventosos_title: { es: 'Los Picos Ventosos', en: 'The Windy Peaks' },
  location_picosventosos_box: { es: 'Refuerzos: Mapas', en: 'Reinforcements: Maps' },
  location_picosventosos_power: { es: '<strong>Poder: </strong>Al comienzo de la Fase 2: Los oponentes intercambian 3 cartas, antes de comenzar la Fase.', en: '<strong>Power: </strong>At the start of Phase 2: Opponents exchange 3 cards before starting the Phase.' },

  location_desierto_title: { es: 'El Desierto Interminable', en: 'The Endless Desert' },
  location_desierto_box: { es: 'Refuerzos: Mapas', en: 'Reinforcements: Maps' },
  location_desierto_power: { es: '<strong>Poder: </strong>Al comienzo de la Fase 1: Los oponentes intercambian 5 cartas, antes de comenzar la Fase.', en: '<strong>Power: </strong>At the start of Phase 1: Opponents exchange 5 cards before starting the Phase.' },

  location_islas_title: { es: 'Las Islas', en: 'The Islands' },
  location_islas_box: { es: 'Refuerzos: Mapas', en: 'Reinforcements: Maps' },
  location_islas_power: { es: '<strong>Poder: </strong>Durante la Fase 1: Se revelan dos cartas del mazo central. El ganador de la baza elige cuál obtiene y la otra se coloca en la parte inferior del mazo. El perdedor toma la carta de la parte superior del mazo como de costumbre. En la última baza, el ganador elige una carta y el perdedor obtiene la otra.', en: '<strong>Power: </strong>During Phase 1: Two cards are revealed from the main deck. The winner of the trick chooses which one they get, and the other is placed at the bottom of the deck. The loser takes the top card of the deck as usual. In the last trick, the winner chooses one card and the loser gets the other.' },

  location_meseta_title: { es: 'La Meseta', en: 'The Plateau' },
  location_meseta_box: { es: 'Refuerzos: Mapas', en: 'Reinforcements: Maps' },
  location_meseta_power: { es: '<strong>Poder: </strong>Si un jugador gana 3 bazas seguidas, el otro jugador será el Líder de la siguiente baza.', en: '<strong>Power: </strong>If a player wins 3 tricks in a row, the other player becomes the Leader of the next trick.' },

  location_pantano_title: { es: 'El Pantano', en: 'The Swamp' },
  location_pantano_box: { es: 'Refuerzos: Mapas', en: 'Reinforcements: Maps' },
  location_pantano_power: { es: '<strong>Poder: </strong>Al comienzo de la Fase 2: Cada jugador debe descartar 2 cartas de su mano a su elección.', en: '<strong>Power: </strong>At the start of Phase 2: Each player must discard 2 cards of their choice from their hand.' },

  location_icebergs_title: { es: 'Los Icebergs', en: 'The Icebergs' },
  location_icebergs_box: { es: 'Refuerzos: Mapas', en: 'Reinforcements: Maps' },
  location_icebergs_power: { es: '<strong>Poder: </strong>Si un jugador pierde una baza, aumenta en +1 el valor de la siguiente carta que juegue.', en: '<strong>Power: </strong>If a player loses a trick, increase the value of the next card they play by +1.' },

  location_taberna_title: { es: 'La Taberna', en: 'The Tavern' },
  location_taberna_box: { es: 'Refuerzos: Fuego', en: 'Reinforcements: Fire' },
  location_taberna_power: { es: '<strong>Poder: </strong>Al final de la partida, cada jugador debe elegir dos cartas de su pila de Simpatizantes (menos aquellas que deban quedarse boca arriba) y dárselas a su oponente, quien las añadirá a su pila de Simpatizantes.', en: '<strong>Power: </strong>At the end of the game, each player must choose two cards from their Sympathizer pile (except those that must remain face up) and give them to their opponent, who will add them to their Sympathizer pile.' },

  location_agujero_title: { es: 'El Agujero', en: 'The Hole' },
  location_agujero_box: { es: 'Refuerzos: Fuego', en: 'Reinforcements: Fire' },
  location_agujero_power: { es: '<strong>Poder: </strong>Quien haya ganado la última baza de la partida debe descartar 2 cartas aleatorias de su pila de Simpatizantes.', en: '<strong>Power: </strong>Whoever won the last trick of the game must discard 2 random cards from their Sympathizer pile.' },

  location_camposlava_title: { es: 'Campos de Lava', en: 'Lava Fields' },
  location_camposlava_box: { es: 'Refuerzos: Fuego', en: 'Reinforcements: Fire' },
  location_camposlava_power: { es: '<strong>Poder: </strong>En la Fase 2: Si un jugador pierde 5 bazas seguidas, gana automáticamente la partida.', en: '<strong>Power: </strong>In Phase 2: If a player loses 5 tricks in a row, they automatically win the game.' },

  location_bosque_title: { es: 'El Bosque', en: 'The Forest' },
  location_bosque_box: { es: 'Refuerzos: Fuego', en: 'Reinforcements: Fire' },
  location_bosque_power: { es: '<strong>Poder: </strong>Al final de la partida, si un jugador tiene 5 cartas o menos en su pila de Simpatizantes, gana automáticamente la partida.', en: '<strong>Power: </strong>At the end of the game, if a player has 5 or fewer cards in their Sympathizer pile, they automatically win the game.' },

  // Footer
  footer: { es: 'Guía no oficial de Claim.', en: 'Unofficial Claim guide.' }
};