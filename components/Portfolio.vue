<template>
  <div>
    <h2>portfolio</h2>
    <button @click="showAll = !showAll">
      <span v-if="showAll"> Show Less </span>
      <span v-else> Show More</span>
    </button>

    <h3>
      <span v-if="showAll" style="color: #f33">
        Below are all online projects since 2008 - <br />
        <small>
          most of them are outdated or not in the state that I created
        </small>
      </span>

      <span v-else> Below are the most interesting projects </span>
    </h3>

    <article class="mt-3">
      <h2>2022</h2>

      <section>
        <h3>in progress:</h3>
        <a href="https://admin.gillrath.de/objekte/">
          gillrath.de relaunch
          <small>
            a.o.: Web Components created with vue / vite for the cards
            integrated in Wordpress DIVI · CSS
            <br />
            the project consist of five separate DevOps environments managed via
            GitHub (WebComponent Lib, Modules Plugin for DIVI, Plugin for Custom
            Post Types and Taxonomies as Well as Advanced Custom Fields
            Configuration, FilterPlugin, DIVI-Childtheme)
          </small>
        </a>

        <a :class="others" href="https://nuxt-dev.measx.com/">
          measx.com
          <small> Bigger Nuxt Project, in progress </small>
        </a>
      </section>

      <section>
        <h3>for www.schlicht-und-ergreifend.de:</h3>
        <a href="https://shapes-music.de">
          shapes-music.de
          <small>
            basic website with an HTML5 video and loop listener, three.js was
            used for the footer animation of the »logo s«
          </small>
        </a>
        <a :class="others" href="https://shapes.film/">
          shapes-music.de
          <small> basic website with WordPress and DIVI </small>
        </a>
      </section>

      <h2>2021</h2>
      <section>
        <a href="https://alumni.ikv-aachen.de">
          alumni.ikv-aachen.de - Alumni-SPA
          <small>
            Multiuser Contacts App for the Institute of Plastics Processing<br />
            demonstration possible
          </small>
        </a>
        <a href="https://diaedge-platform.mmc-hardmetal.com/">
          Diaedge Platform, MMC Hardmetal
          <small>
            freelance Vue.js developer work for Walbert-Schmitz / all 3D design
            and code is work of Walbert-Schmitz
          </small>
        </a>
        <a href="https://3kubik.com">
          3kubik.com
          <small>
            a CMS that makes use of advanced features of WordPress' mulitpurpose
            theme Divi, it features a »KPI-Tool« which is developed as a VUE.js
            REST driven calculator plugin
          </small>
        </a>

        <a href="https://homo-digitalis.ch">
          homo-digitalis.ch -
          <small>
            Design Job - initial setup and design for the owner, my layout, now
            maintained by owner
          </small>
        </a>

        <a href="https://www.bretagneurlaub.de">
          bretagneurlaub.de -
          <small>
            a holidayhome website, Nuxt.js, extensive use of taxonomy and custom
            post types. Design by Schroeder-And-Friends, SEO concept by
            bretagneurlaub.de
          </small>
        </a>

        <a href="https://oyess.de/">
          Oyess - Winner of the German Sustainability Award 2022
        </a>
        <a :class="others" href="https://shop.gillrath.de/">
          shop.gillrath.de - basic web shop
        </a>
        <a href="https://jobs.gillrath.de/">
          jobs.gillrath.de
          <small>
            basic jobs board - optimised for speed, my layout, vue nuxt from
            scratch
          </small>
        </a>
        <a :class="others" href="https://ai-pi.io">
          aipi
          <small> WP - Divi </small>
        </a>

        <h3>for www.schlicht-und-ergreifend.de:</h3>

        <a href="https://stoke-borchert.de">
          Stoke Borchert
          <small>
            a Nuxt.js driven website with static texts and internationalisation.
            / the hoverstate of the navigation is vanilla Javascript
          </small>
        </a>
      </section>
      <h2>2020</h2>

      <section>
        <strike>Online Conference CMS for IKV / Offline</strike>
        <a :class="others" href="http://minzeven.nl/">
          minzeven.nl
          <small>
            boutique winery with a neat usage of the Divi theme for WordPress
          </small>
        </a>
        <a :class="others" href="https://neazubi.de">
          neazubi.de
          <small> WordPress Divi - design by NEA </small>
        </a>
        <h3>for www.schlicht-und-ergreifend.de:</h3>
        <strike :class="others">
          <a href="https://olli-electro.de">
            Olli Elektro
            <small>
              speed optimised static website, with iterative design process on
              the fly
            </small>
          </a>
        </strike>
        <a href="https://portfolio.digital-noises.de/www.olli-elektro.de/">
          Olli Elektro - <small>Backup Version - extreme responsive</small>
        </a>
      </section>
      <h2>2019</h2>
      <section>
        <strike :class="others">
          <a href="https://hamecker.de/" title="hamecker.de">
            Hamecker / WordPress
            <small> Maintained by Client, WordPress &amp; DIVI </small>
          </a>
        </strike>
        <a
          :class="others"
          href="https://www.cafehoffmann.de"
          title="cafehoffmann.de"
        >
          Cafe Hoffmann
          <small> Maintained by Client, WordPress &amp; DIVI </small>
        </a>

        <a :class="others" href="https://elektro-weltrekordflug.eu">
          Elektro Weltrekordflug
          <small>Technical Support</small>
        </a>
        <a
          :class="others"
          href="https://www.dentallabor-teeuwen.de"
          title="dentallabor-teeuwen.de"
        >
          Dentallabor Teeuwen
          <small>basic WordPress driven website with Divi</small>
        </a>
        <strike :class="others">
          <a href="http://blog.sigmasoft.de">
            blog.sigmasoft.de
            <small>WP-Theme from scratch with CSS-Grid</small>
          </a>
        </strike>
        <a href="https://portfolio.digital-noises.de/blog.sigmasoft.de/">
          blog.sigmasoft
          <small>
            backup version - blog template with differend excerpt sections
          </small>
        </a>
        <a href="https://weinshop.wilker.de/shop">
          weinshop.wilker.de/shop
          <small>
            jQuery based DOM rewriting of an existing WooCommerce output to
            create new layout - Not the cleanest way - but most efficient for
            this project
          </small>
        </a>

        <h3>for www.schlicht-und-ergreifend.de:</h3>
        <a :class="others" href="https://www.imo-galle.de/en/">
          imo-galle.de
          <small> WordPress theme from scratch </small>
        </a>

        <a href="https://johndiva.com/">
          johndiva.com
          <small>
            Nuxt.js frontend SPA with semi complex use of content nodes and
            exclusive fan-club login
          </small>
        </a>
      </section>
      <h2>2018</h2>
      <section>
        <a href="https://www.nielsgaury.de/" title="nielsgaury.de">
          NielsGaury.de
          <small>My first Headless WordPress Project with VUE.js</small>
        </a>
        <a
          :class="showAll"
          href="https://knoblauchwuerze.de/"
          title="knoblauchwuerze.de"
        >
          Hägele Knoblauchwürze
          <small>WordPress Screen Design with DIVI</small>
        </a>
        <a :class="others" href="https://www.wilker.de"
          >Weingut Wilker <small>WordPress Screen Design With DIVI</small>
        </a>
        <strike :class="others">
          <a href="http://klinkerzaun.com/">
            Gillrath Klinkerzaun
            <small>WordPress Screen Design From scratch</small>
          </a>
        </strike>
        <strike :class="others">
          <a href="https://weareoneconvention.com">
            We Are One Convention
            <small>Technical Support</small>
          </a>
        </strike>
        <a :class="others" href="http://gillrath.de/klinkerriemchen">
          Gillrath Klinkeriemchen
        </a>
        <a :class="others" href="https://www.comnia.de">Comnia V2</a>
        <a :class="others" href="https://www.elektrotechnik-kohlen.de/">
          Elektro Kohlen
        </a>
        <h3>for www.schlicht-und-ergreifend.de:</h3>
        <strike :class="others">
          <a href="https://www.kangaroo.de">
            Kangaroo
            <small>
              Maintained by Client, based onf frontend CLI free - VUE.js
            </small>
          </a>
        </strike>
        <a href="https://portfolio.digital-noises.de/kangaroo.de/">
          Kangaroo
          <small>
            Backup not fully functional, CSS by thirdparty based on »Foundation«
          </small>
        </a>
        <h3 :class="others">for your-agency.com:</h3>
        <strike>
          <a :class="others" href="https://www.frohn-gesundheit.de">
            frohn-gesundheit.de —
          </a>
        </strike>
      </section>
      <h2>2017</h2>
      <section>
        <a :class="others" href="https://www.toepferei-oberheid.de/">
          Töpferei Oberheid
        </a>
        <a :class="others" href="http://auto-service-twardowski.de">
          Auto Service Twardowski <small>incl. photography</small>
        </a>
        <a
          :class="others"
          href="http://tueschenbroichermuehlenverein.de/"
          title="http://tueschenbroichermuehlenverein.de/"
        >
          Tüschenbroicher Mühlen-Verein
        </a>
        <strike :class="others">
          <a href="http://optik-alberty.de">
            Optik Alberty
            <small>WordPress theme from scratch and photography</small>
          </a>
        </strike>
        <strike :class="others">
          <a href="https://portfolio.digital-noises.de/www.optik-alberty.de/">
            Optik Alberty
            <small>WordPress theme from scratch and photography</small>
          </a>
        </strike>

        <h3 :class="others">for your-agency.com:</h3>
        <strike :class="others">
          <a href="http://www.curlsfight.com"></a>
        </strike>
        <strike :class="others">
          <a href="http://www.parfuemerie-meller.de"></a>
        </strike>
        <strike :class="others">
          <a href="https://www.costrade.at">
            https://www.costrade.at <small>technical support</small>
          </a>
        </strike>

        <h3 :class="others">for www.schlicht-und-ergreifend.de:</h3>
        <strike :class="others">
          <a href="http://talkcitizen.org">
            TalkCitizen <small>WP Theme from scratch</small>
          </a>
        </strike>
        <a
          :class="others"
          href="https://portfolio.digital-noises.de/talkcitizen.org/"
        >
          TalkCitizen <small>hard rendered backup with errors</small>
        </a>
        <strike :class="others">
          <a href="https://bronk-company.com">
            Bronk Company relaunch <small>WP theme from scratch</small>
          </a>
        </strike>
        <strike :class="others">
          <a href="http://metalmeets.com">Metal Meets relaunch</a>
        </strike>
        <h3 :class="others">for www.schroeder&shy;and&shy;friends.com:</h3>
        <strike :class="others">
          <a href="http://www.pursteucks.de"></a>
        </strike>
        <h3 :class="others">for www.fauck-grafikdesign.de:</h3>
        <strike :class="others">
          <a href="http://www.kp-brandconcept.com">KP Brandconcept</a>
        </strike>

        <h3 :class="others">for bykuchel.de:</h3>
        <a :class="others" href="http://www.bpwk.de">
          BPWK
          <small> // technical assistant / addons </small>
        </a>
      </section>
      <h2>2016</h2>
      <section>
        <strike :class="others">
          <a href="http://fdi-secrets.de">
            FDI Secrets <small>WP Theme from scratch</small>
          </a>
        </strike>

        <a href="https://portfolio.digital-noises.de/www.fdi-secrets.de/">
          FDI Secrets
          <small>Backup Version</small>
        </a>
        <a :class="others" href="https://hosted.comnia.de/3cx">
          Hosted 3CX, by Comnia
          <small>WordPress &amp; DIVI</small>
        </a>
        <a :class="others" href="https://voip.comnia.de">
          VOIP by Comnia
          <small>WordPress &amp; DIVI</small>
        </a>
        <a
          :class="others"
          href="http://www.michels-blumen.de/"
          title="http://www.michels-blumen.de/"
        >
          Michels Blumen.de - Relaunch <small>WP-Theme from scratch</small>
        </a>

        <strike :class="others">
          <a
            href="http://i-love-tigi.de/colourtrip/"
            title="http://i-love-tigi.de/colourtrip/"
          >
            http://i-love-tigi.de/colourtrip/
          </a>
        </strike>
        <a :class="others" href="https://fashion-design-institut.de">
          Fashion Design Institut
          <small>WP Theme from scratch, maintained by third party</small>
        </a>
        <a :class="others" href="https://www.b-w-international.com">
          Technical Support for B&amp;W International
        </a>
        <h3 :class="others">for www.your-agency.com:</h3>
        <a :class="others" href="http://www.gianni-dassero.com">
          Gianni D‘Assero
          <small>WP Theme from scratch</small>
        </a>
        <a :class="others" href="http://www.tigi-hafencity-salon.com">
          Tigi Hafencity
          <small>WP Theme from scratch</small>
        </a>
        <a :class="others" href="http://i-love-tigi.de/247app/toappstore">
          TIGI 2/47APP Marketing
          <small>ios Marketing</small>
        </a>
        <h3 :class="others">for www.schlicht-und-ergreifend.de:</h3>
        <a :class="others" href="http://www.hoehler-neumann.de">
          Hoehler Neumann Lawyers, Aachen relaunch
          <small>WP Theme from scratch</small>
        </a>
        <h3 :class="others">for www.schroeder&shy;and&shy;friends.com:</h3>
        <small :class="others">Technical Support for</small>
        <a :class="others" href="http://www.schroeder&shy;and&shy;friends.com">
          Schroeder and Friends
        </a>
        <a :class="others" href="http://www.schell-gruentechnik.de"
          >Shell Grüntechnik</a
        >
        <a :class="others" href="http://www.hochheuser.com">Hochheuser</a>
        <a :class="others" href="http://geckoconsulting-ac.de"
          >Geckoconsulting AC</a
        >
        <h3 :class="others">
          based on my multisite - WordPress system
          <small>incl. Custom Plugins - Layout: Squarevisuals</small>
        </h3>

        <strike :class="others">
          <a href="http://stormheart.de/">Stormheart</a>
        </strike>
        <strike :class="others">
          <a href="http://marahwoolf.de/">Marahwoolf</a>
        </strike>
        <strike :class="others">
          <a href="http://animox-buch.de/">Animox</a>
        </strike>
        <strike :class="others">
          <a href="http://cjdaugherty.de">C.J. Daugherty</a>
        </strike>
        <strike :class="others">
          <a href="http://oetinger-ohrwuermchen.de"> Oetinger Ohrwürmchen </a>
        </strike>
        <strike :class="others">
          <a href="http://ghetto-bitch.de">Ghetto Bitch</a>
        </strike>
        <strike :class="others">
          <a href="http://secrets-trilogie.de">Secrets Trilogie</a>
        </strike>
        <strike :class="others">
          <a href="http://buecherstern.de">Bücherstern</a>
        </strike>
        <strike :class="others">
          <a href="http://monday-club.de">Monday Club</a>
        </strike>
      </section>

      <h2>2015</h2>
      <section>
        <strike :class="others">
          <a href="http://www.dietributevonpanem.de">
            Die Tribute von Panem <small>WP Theme from scratch</small>
          </a>
        </strike>

        <a href="http://olchis.de">
          Die Olchis <small>WP Theme from scratch</small>
        </a>
        <a href="http://www.dassams.de">
          Das Sams <small>WP Theme from scratch</small>
        </a>
        <strike :class="others">
          <a href="#">Support for Clubsante.eu</a>
        </strike>
        <a href="http://fahrschulmanufaktur.de">Fahrschulmanufaktur</a>
        <strike :class="others">
          <a href="http://www.pettersson-und-findus.de">
            Petterson und Findus <small>WP Theme from scratch</small>
          </a>
        </strike>
        <strike :class="others">
          <a href="http://malunamondschein.de">
            Maluna Mondschein <small>WP Theme from scratch</small>
          </a>
        </strike>

        <a :class="others" href="http://funke-buch.de">
          Cornelia Funke · Reckless <small>WP Theme from scratch</small>
        </a>
        <a :class="others" href="http://www.notare-svk.de">
          Notare SVK <small>WP Theme from scratch</small>
        </a>
        <!-- <a href="http://diagnostik-hilft.de"
          >Diagnostik Hilft <small>WP Theme from scratch</small></a
        > -->
        <a href="http://norbert-greuel.de"
          >Norbert Greuel <small>WP Theme from scratch</small></a
        >
        <a :class="others" href="http://www.oldcountryhousenz.com/">
          Old Countryhouse Christchurch
          <small>WordPress & DIVI</small>
        </a>
        <strike :class="others">
          <a href="http://www.european-inspire.com">
            Kyocera SEO - Marketing Help
          </a>
        </strike>
        <strike :class="others">
          <a href="http://www.geheim-garten.de">
            Geheimgarten
            <small>outdated / offline / furniture online shop</small>
          </a>
        </strike>
        <strike :class="others">
          <a href="http://www.elliott-homestaging.de">outdated / offline</a>
        </strike>
        <a href="https://www.abtei-gerleve.de">
          Abtei Gerleve <small>WP Theme from scratch</small>
        </a>
        <a :class="others" href="http://www.michels-blumen.de/"
          >Michels Blumen</a
        >
        <a :class="others" href="https://fashion-design-institut.de">
          fashion-design-institut.de (responsive relaunch)
          <small>WP Theme from scratch</small>
        </a>
        <strike :class="others">
          <a href="http://sigmasoft.de">
            sigmasoft.de relaunch <small>WP Theme from scratch</small>
          </a>
        </strike>

        <strike :class="others">
          <a href="https://colorissima.de">
            Colorissima
            <small>WordPress from scratch, maintained by owner</small>
          </a>
        </strike>
        <a :class="others" href="https://boot-folierung.de/">
          Boot-Folierung
          <small>WordPress from scratch, maintained by owner</small>
        </a>
      </section>

      <h2>2014</h2>
      <section>
        <!-- <a href="https://praxis-am-rathausplatz.de/">
          Praxis am Rathausplatz <small>WP-Theme from scratch</small>
        </a>
        <a href="http://ecoseaker.nz" title="Swim with Dolphins in Akaroa">
          Ecoseaker <small>WordPress with Divi, maintained by owner</small>
        </a> -->
        <!--
            <a href="https://bronk-objekte.de" title="Bronk Objekte" class="">Bronk Objekte</a>
-->
        <a
          href="https://itunes.apple.com/us/app/sequent-medical/id880399337?mt=8"
          title="Sequent Medical"
          class=""
        >
          Sequent Medical (An ios / Android App)
        </a>
        <!-- <strike>
          <a href="http://ophover-muehle.de"> ophover-muehle.de </a>
        </strike> -->
        <!--  <a href="http://angelpark-tueschenbroich.de"></a> -->
        <!-- <a href="http://sina-lindberg.de"></a>
        <a href="http://d.iorama.de"></a>
        <a href="http://gillrath.de">
          Gillrath <small>WP Theme from scratch</small>
        </a> -->
        <!-- <strike>
          <a href="http://www.spg-steiner.com">
            SPG Steiner <small>WP Theme from scratch</small>
          </a>
        </strike> -->
        <!-- <a href="http://fotos.chmidt.net"></a>
        <strike><a href="http://bronk-company.com"></a></strike>
        <a href="http://auge-wegberg.de"
          >
          Augenarzt Wegberg <small>WP Theme from scratch</small>
          </a
        > -->
      </section>
      <h2>2013</h2>
      <section>
        <!-- <strike>
          <a href="http://www.gastconcept.de">
            www.gastconcept.de // outdated / offline
          </a>
        </strike> -->
        <!-- <a href="https://blattundblume.com"></a> -->
        <!-- <a href="https://accurare.de"></a> -->
        <!-- <strike><a href="https://www.drueckhammer.de"></a></strike> -->
        <a href="https://nea-enews.de">
          NEA Enews, complex WordPress Theme with custom pagebuilder, outdated
          technology, maintained by owner
        </a>
        <!-- <strike><a href="http://andiewand.de"></a></strike> -->
        <!-- <strike>
          <a href="http://www.sigmasoft.de">
            Sigmasoft
            <small>WordPress Theme from scratch, multilanguage</small>
          </a>
        </strike> -->
        <!-- <a href="http://www.fashion-design-institut.de"></a> -->
        <!-- <a href="https://www.jks-aachen.de/"></a> -->
        <!-- <strike><a href="http://www.hospizstiftung-aachen.de"></a></strike> -->
        <!-- <a href="http://www.tueschenbroicher-muehle.de">
          Tueschenbroicher-Mühle
        </a> -->
        <!-- <a href="http://www.ebens.de">Ebens</a> -->
        <!-- <a href="http://physio-csw.de">Physio-CSW</a> -->
      </section>
      <h2>2012</h2>
      <section>
        <a :class="others" href="http://www.buerofueraufmerksamkeit.de">
          buerofueraufmerksamkeit - Theme from scratch
        </a>
        <strike :class="others">
          <a href="https://oberste-beulmann.de">Oberste Beulmann</a>
        </strike>
        <a href="https://www.digital-noises.com">Digital Noises</a>
        <a :class="others" href="https://atelieretage-wegberg.de/"
          >Atelieretage Wwegberg</a
        >
        <strike :class="others">
          <a href="http://www.ena-beratung.de"></a
        ></strike>
        <strike :class="others">
          <a href="http://www.your-agency.com"></a
        ></strike>
        <a :class="others" href="http://www.hoehler-neumann.de"></a>
        <a :class="others" href="http://www.darius-mattheisen.de"></a>
        <!-- <strike> <a href="http://www.savanald.de"></a></strike> -->
        <!-- <strike> <a href="http://www.schlemmermarkt-wassenberg.de"></a></strike> -->
        <!-- <strike><a href="http://homecare-aachen.de"></a></strike> -->
        <a href="https://anna-maria-maile.de">Anna-Maria Maile</a>
      </section>
      <h2>2012 /developed with my trainee</h2>
      <section>
        <a href="https://www.vitalliin.de">Vitalliin</a>
        <a :class="others" href="http://minigolf-wegberg.de"
          >Minigolf Wegberg</a
        >
        <a href="https://www.landhausbrender.de">Landhaus Brender</a>
        <a href="https://www.startarevolution.de">Start a Revolution</a>
      </section>
      <h2>2011</h2>
      <section>
        <a href="http://www.oliebe.de"></a>
        <!-- <strike> <a href="http://www.sjs-kanzlei.de"></a></strike> -->
        <!-- <strike> <a href="http://tp-rechtsanwaelte.de"></a></strike> -->
        <!-- <a href="http://www.abtei-gerleve.de"></a> -->
        <!-- <strike> <a href="http://syst-beratung.com"></a></strike> -->
        <!-- <a href="http://www.schmitz-vornmoor.de"></a> -->
        <!-- <strike> <a href="http://idgmbh.de"></a></strike> -->
        <!-- <strike> <a href="http://www.habets-aachen.de/"></a> </strike> -->
      </section>
      <h2>2010 and older</h2>
      <section>
        <!-- <a href="https://oliebe.com/">Oliebe</a> -->
        <!-- <a href="http://www.georg-maas.eu/en/">Georg-Maas</a> -->
        <!-- <strike> <a href="http://www.jansen-textil.de"></a></strike> -->
        <!-- <strike> <a href="http://www.hifi-schluderbacher.de"></a></strike> -->
        <!-- <a href="https://www.auge-wegberg.de"></a> -->
        <!-- <a href="http://michels-blumen.de"></a> -->
        <!-- <a href="https://www.musikkeller.com">
          Musikkeller - First Webseite with MySql from scratch
        </a> -->
        <!-- <a href="https://www.kgsoiron.de/">Ssoiron</a> -->
        <!-- <strike> <a href="http://www.bvsa.de"></a></strike> -->
        <!-- <strike> <a href="http://zplusm.de"></a></strike> -->
        <!-- <strike> <a href="http://vitalpraxis-roetgen.de"></a></strike> -->
        <!-- <a href="https://zytologie-buettner.de"></a> -->
        <!-- <strike> <a href="http://gefaessmedizin.info"></a></strike> -->
        <!-- <strike> <a href="http://www.simpatec.com"></a></strike> -->
        <!-- <strike> <a href="http://www.loening.eu"></a></strike> -->
        <!-- <strike> <a href="http://www.blumenhaus-steffens.de/"></a></strike> -->
      </section>
      <!-- <h2>XMAS</h2> -->
      <!-- <section>
        <a href="http://digital-noises.com/_test/20131207_sony-xmas/"></a>
        <a href="http://digital-noises.com/demo/sony-xmas2012/"></a>
        <a href="http://digital-noises.com/demo/trenkwalder-xmas2012/"></a>
        <a href="http://digital-noises.com/demo/sequent-medical-xmas2012/"></a>
        <a href="http://digital-noises.com/demo/vba-events-xmas2012/"></a>
        <a
          href="http://schommertz.com/mailings/20131219-valdisere/index.php"
        ></a>
        <a href="http://schommertz.com/mailings/xMas/index.html">
          Sequentmedical 2013
        </a>
      </section> -->
      <h2>artist sites outdated</h2>
      <section>
        <strike><a href="http://www.johnnylogan.com"></a></strike>
        <strike><a href="http://www.kylie.de"></a></strike>
        <!-- <strike><a href="http://www.auletta.de"></a></strike> -->
      </section>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAll: false,
    }
  },
  computed: {
    others() {
      return this.showAll ? 'showOthers' : 'hideOthers'
    },
  },
}
</script>

<style lang="scss" scoped>
article,
.article {
  section + h2 {
    margin-top: 2em;
  }
  h3 {
    margin-top: 1.25em;
  }
}
button {
  all: unset;
  border-radius: 0.4em;
  background: #fff;
  padding: 0.2em 0.5em;
  &:hover,
  &:focus {
    background: #eee;
  }
}
a {
  display: block;
  small {
    display: block;
  }
  &.showOthers {
    display: block;
    font-size: 0.8em;
  }
  &.hideOthers {
    display: none;
  }
}
a[href^='http']:empty::before {
  content: attr(href);
}
</style>
