import bungeLodersImg from '@/assets/Erica_Bunge_Loders.png';
import heinekenHns2025Img from '@/assets/heineken_hns_2025.jpg';
import klmExperienceImg from '@/assets/klm_experience.jpg';
import heinekenPackaging2022Img from '@/assets/heineken_packaging_2022.jpg';
import pensioenfondsImg from '@/assets/pensioenfonds_experience.jpg';
import dirkDistributionImg from '@/assets/dirk_distribution_experience.jpg';

export interface ExperienceData {
  id: string;
  title: string;
  role: string;
  period: string;
  image: string;
  shortDescription: string;
  fullDescription: string[];
}

export const experiences: ExperienceData[] = [
  {
    id: "heineken-hns-projects-2025",
    title: "Heineken Netherlands Supply (HNS)",
    role: "People Business Partner Projects ad interim",
    period: "Februari 2025 - December 2025",
    image: heinekenHns2025Img,
    shortDescription: "People Business Partner Projects ad interim bij Heineken Netherlands Supply.",
    fullDescription: [
      "**People Business Partner Projects ad interim**",
      "Diverse projecten gericht op transformatie en verhoging productiviteit (ook Robotics pilots) incluis de daar bijbehorende OR-adviesaanvraag trajecten in zowel Packaging, Brewing als Customers Service. Tevens betrokken bij HR IT project Mytime, implementatie global Time & Rosterplanning system binnen HNS."
    ]
  },
  {
    id: "klm-recruitment-mobilisering",
    title: "KLM Royal Dutch Airlines",
    role: "Diverse functies",
    period: "Oktober 2021 - December 2024",
    image: klmExperienceImg,
    shortDescription: "Diverse HR functies binnen KLM Royal Dutch Airlines gedurende meerdere perioden.",
    fullDescription: [
      "**Engineering & Maintenance**",
      "December 2023 - December 2024",
      "",
      "**Senior project manager sourcing ad interim**",
      "Als interim HRBP rapporterend aan de VP HR BP Engineering & Maintenance, managementteamlid, adviseur/relatiebeheerder voor de bestuurder richting Groepscommissie 28 en liaison voor lijnmanagers richting Center of Expertise & HR operations (Resourcing & Health, Legal, LD, LTM en HRSSC).  Evaluatie en afronding en borging reorganisatie (Resize & Restructuering), adviesaanvraagtrajecten (o.a. tijdelijke verplaatsing C-Checks NB B737 naar KLM UK), Employability, ORBA, Introductie TOP gesprekken, benchmarking arbeidsvoorwaarden en toepassing van de CAO & Sociaal plan (Ground).",
      "",
      "April 2023 - November 2023",
      "",
      "**HR business partner engine services ad interim**",
      "Als interim HRBP rapporterend aan de VP HR BP E&M, Engine Servicesmanagementteamlid, adviseur/relatiebeheerder voor de bestuurder (VPEngine Services) richting lokale OR (Groepscommissie 24) en liaison voorlijnmanagers richting Center of Expertise & HR operations (Resourcing &Health, Legal, Sourcing, LD en HRSSC). Advies & instemmingaanvraagtrajecten, Employability, ORBA, Talent Grid.",
      "",
      "Oktober 2021 - April 2022",
      "",
      "**HR business partner airframe services ad interim**",
      "Als interim HRBP rapporterend aan de VP HR BP Engineering & Maintenance, managementteamlid, adviseur/relatiebeheerder voor de bestuurder richting Groepscommissie 28 en liaison voor lijnmanagers richting Center of Expertise & HR operations (Resourcing & Health, Legal, LD, LTM en HRSSC).  Evaluatie en afronding en borging reorganisatie (Resize & Restructuering), adviesaanvraagtrajecten (o.a. tijdelijke verplaatsing C-Checks NB B737 naar KLM UK), Employability, ORBA, Introductie TOP gesprekken, benchmarking arbeidsvoorwaarden en toepassing van de CAO & Sociaal plan (Ground)."
    ]
  },
  {
    id: "heineken-netherlands-supply",
    title: "Heineken Netherlands Supply",
    role: "People business partner packaging ad interim",
    period: "Mei 2022 - Maart 2023",
    image: heinekenPackaging2022Img,
    shortDescription: "People business partner packaging ad interim",
    fullDescription: [
      "**People business partner packaging ad interim**",
      "PBP voor de 4 Packaging Managers en de Line Leads, relatiebeheerder richting Ondernemingsraad, liaison voor lijnmanagers richting People Operations, Recruitment en L&D en BPO voor outsourcing (flexibele schil via Adecco (9 miljoen euro).Evaluatie en borging van reorganisatie (Transformatie en Techniek in de Lijn). Projectleider voor de nieuwe roosters (35 instemmingsaanvragen) van 2023 op basis van AP2023 en forecast van volume, incluis onderhandeling met de OR. Onderdeel van de paritaire werkgroep (FNV) over de interpretatie van cao-artikelen, de afbouw ploegentoeslaag regeling en flexibel roosteren."
    ]
  },
  {
    id: "stichting-pensioenfonds-fracties",
    title: "Stichting Pensioenfonds de Fracties",
    role: "Voorzitter",
    period: "2008 - 2022",
    image: pensioenfondsImg,
    shortDescription: "Voorzitter van het bestuur van ondernemingspensionfonds.",
    fullDescription: [
      "**Voorzitter**",
      "Voorzitter van het bestuur van ondernemingspensionfonds van Bunge Loders Croklaan met ruim 200 miljoen euro vermogen. Vanwege de schaalgrootte en het toekomstige nieuwe pensioenstelsel en de opzegging van de uitvoeringsovereenkomst door de werkgever is het pensioenfonds eind 2022 geliquideerd en overgedragen naar Pensioenfonds PGB met een indexatie van ruim 5%."
    ]
  },
  {
    id: "bunge-loders-croklaan",
    title: "Bunge Loders Croklaan",
    role: "Diverse functies",
    period: "Maart 2002 - Juli 2021",
    image: bungeLodersImg,
    shortDescription: "Diverse HR functies bij Bunge Loders Croklaan gedurende 19 jaar.",
    fullDescription: [
      "**HR Manager Europe**",
      "Ervaren Senior HR-manager bij een internationale B2B-producent van plantaardige oliën en vetten; met 130 jaar geschiedenis en overnames door Unilever (30 jaar), IOI Group (2002-2018) en Bunge (2018, 32.000 medewerkers, 40 landen).",
      "",
      "**Management**",
      "Managementteamlid, programmamanager van diverse missie-, visie-, strategie- en cultuurprogramma's. Leidinggeven en coachen van eigen HR-team (HR-adviseurs, Talent acquisition team en Payroll team) binnen Europa (incluis 5 verkoopkantoren in het buitenland) en Ghana.",
      "",
      "**Employee Benefits**",
      "Job classificatie, interne job levelling en externe benchmark (HAY, Towers Watson, ORBA), Cao-onderhandeling woordvoerder (10 keer), aanbestedingstrajecten HR-providers (IT, Arbodienst, eigen riscio drager Ziektewet, ERD, WIA e.d.), in- en expats (onboarding, 30% regeling), harmonisatie arbeidsvoorwaarden diverse business units, modernisering mobiliteitsbeleid.",
      "",
      "**Organisatiewijzigingen**",
      "2 Greenfield project (Maasvlakte en Ghana), diverse merger & acquisition trajecten en HR due diligence projecten (Skeer), diverse reorganisaties (4 keer), waaronder de transitie van HR, IT & Finance support naar het Bunge Shared Service Center in India incluis OR adviesaanvraag traject en (UWV) ontslagronde.",
      "",
      "**Learning & Development**",
      "Persoonlijke ontwikkelingsprogramma voor jonge managers (sinds 2004), talent review en sucession planning (o.a. 9 cell box matrix).",
      "",
      "**Duurzame inzetbaarheid**",
      "Rode draad in mijn HR-carrière is het thema Duurzame inzetbaarheid. Vanuit een HR-langetermijnvisie op de demografische ontwikkeling van ontgroening en vergrijzing. Vanuit dit perspectief diverse succesvolle projecten geïnitieerd die ook in de prijzen zijn gevallen"
    ]
  },
  {
    id: "samenwerking-dkk-van-den-brink",
    title: "Samenwerking Dirk van den Broek bedrijven",
    role: "HR-professional",
    period: "Februari 1995 - Februari 2002",
    image: dirkDistributionImg,
    shortDescription: "Diverse HR functies bij Dirk van den Broek bedrijven.",
    fullDescription: [
      "**HR manager supply chain**",
      "Groei van 2 naar 5 distributiecentra (150 naar 750 medewerkers), incluis de inrichting van de HR-afdeling.",
      "",
      "**HR IT Project Manager**",
      "Millennium transitie HR-systeem (CMG) voor 10 databases, 14 loonlijsten en 4 CAO incluis inrichting shared service center voor payroll.",
      "",
      "**HR Business Partner**",
      "Vanuit de staforganisatie adviseren van operationeel HR-afdelingen en directies van de verschillende werkmaatschappijen. Diverse projecten waaronder; Talent development, de ontwikkeling van de Job site Superjob.nl en de ontwikkeling en implementatie van een introductieprogramma voor nieuwe medewerker."
    ]
  }
];
