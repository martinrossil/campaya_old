import VerticalContainer from '../containers/VerticalContainer';
import ExpandableQuestionAnswer from './ExpandableQuestionAnswer';

export default class QuestionAnswers extends VerticalContainer {
    public constructor() {
        super(24);
        this.name = 'QuestionAnswers';
        this.percentWidth = 100;
        this.addElements([
            new ExpandableQuestionAnswer('Hvordan kommer jeg i gang?', 'Du kan hurtigt skrive dig op lige her. Du er også meget velkommen til at kontakte vores ejerrådgivere på 69 91 80 60 eller husejer@campaya.dk, hvis du ønsker at høre mere om vores tilbud.\n\nVores rådgivere hjælper dig hellere end gerne med stort og småt både før og efter, du har oprettet din bolig hos os. De kommer også gerne med et konkret prisestimat på, hvor meget du kan tjene på at leje lige netop dit sommerhus ud på Campaya.'),
            new ExpandableQuestionAnswer('Kan jeg stadig selv bruge mit sommerhus?', 'Det kan du tro. Alt det du vil faktisk. Du bestemmer fuldstændig selv, hvor meget dit sommerhus skal lejes ud og i hvilke perioder. Og du kan nemt tilpasse løbende i din egen udlejningskalender, hvis du alligevel ikke ønsker at leje ud en given periode.\n\nPå den måde er du hele tiden fri til at bruge dit sommerhus, når du vil, og der er rig mulighed for at tage på spontane ture i sommerhuset, når lysten pludselig opstår.'),
            new ExpandableQuestionAnswer('Kan I udleje mit sommerhus hele året?', 'Ja. Vi har et meget effektivt udlejningssetup og samarbejder med en række store aktører, som sikrer dit sommerhus massiv synlighed hele året.\n\nKontakt vores ejerrådgivere på 69 91 80 60 eller husejer@campaya.dk for at høre nærmere om dine muligheder.'),
            new ExpandableQuestionAnswer('Tilbyder I servicering af poolhuse?', 'Ja. Vi samarbejder med poolservice-selskaber i hele landet, og du har mulighed for at vælge den samarbejdspartner, du syntes bedst om i dit lokalområde.\n\nDet gør du nemt på din egen udlejningsside.'),
            new ExpandableQuestionAnswer('Hvor stort skattefradrag kan jeg få, når jeg udlejer hos jer?', 'Når du udlejer hos Campaya, er de første 42.700 kr. af din lejeindtægt skattefrie.\n\nDu skal desuden kun betale skat af 60% af din lejeindtægt fra sommerhuset udover det.'),
            new ExpandableQuestionAnswer('Hvor og hvordan bliver mit sommerhus markedsført?', 'Vi udlejer dit sommerhus via vores eget site, som findes på ti forskellige sprog og sikrer dit hus rigtig stor synlighed i mange lande.\n\nVi samarbejder desuden med flere eksterne aktører, fx Google Vacation Rentals og Booking.com, og samlet bliver dit sommerhus synligt for en ekstrem stor lejerskare, når det sættes til udlejning hos os.\n\nSynligheden hos de eksterne platforme er selvfølgelig uden merpris for dig og sikrer dig et stort antal udlejninger af dit sommerhus.'),
            new ExpandableQuestionAnswer('Må jeg udleje mit sommerhus på andre udlejningsportaler samtidig?', 'Ja! Vi ønsker at give dig som sommerhusejer størst mulig selvbestemmelse, når det kommer til dit sommerhus og udlejningen heraf. Derfor kan du sagtens udleje dit hus via andre platforme og kanaler, når du udlejer hos os, hvis du ønsker det.\n\nDet er meget nemt at sammenkoble vores udlejningskalender med andre portalers, så dit sommerhus aldrig dobbeltbookes, selvom det udlejes flere steder. Det kan hurtigt og let sættes op inde på din udlejningsside. Og vores ejerrådgivere hjælper dig hellere end gerne i processen.'),
            new ExpandableQuestionAnswer('Hvad med rengøringen?', 'Hos Campaya kan du få en af vores serviceleverandører til at varetage rengøringen for dig. Det sikrer dig en professionel varetagelse af rengøringen foretaget af kvalificerede fagfolk og ikke ungarbejdere.\n\nPå den måde passer du ekstra godt på dit sommerhus. Uden at det koster dig mere. Rengøringen betales af lejer.\n\nDu kan også vælge selv at varetage rengøringen af dit sommerhus, hvis du ønsker at være en del af processen selv. Det er helt op til dig. Hvis du vælger at varetage rengøringen selv, modtager du betaling fra lejer for denne ekstra service.'),
            new ExpandableQuestionAnswer('Hvordan prissættes mit sommerhus?', 'Du bestemmer fuldstændig selv, hvad du ønsker at leje dit sommerhus ud for. Vi kommer gerne og i langt de fleste tilfælde med vores prisvurdering af dit sommerhus på tværs af årets sæsoner, og vi rådgiver dig gerne i detaljen om, hvilken pris der giver mest mening at sætte dit hus til.\n\nI sidste ende er det imidlertid dig, der bestemmer, hvad du ønsker at leje dit hus ud til. Det er nemlig vidt forskelligt, hvilke ønsker sommerhusejerne har. Nogle ønsker kun at leje deres sommerhus ud i nogle enkelte uger, og hvis de kan få en meget høj pris, mens andre er mere fokuserede på at tjene mest muligt på udlejningen samlet set.\n\nDerfor rådgiver vi gerne og hjælper dig med at fastsætte priserne, så det passer allerbedst til dine specifikke ønsker.'),
            new ExpandableQuestionAnswer('Er mit hus forsikret, når det udlejes hos jer?', 'Ja. Det er essentielt for os, at du som udlejer føler dig tryg og veltilpas, når dit hus lejes ud. Derfor har vi tegnet forsikring hos Gjensidige, som dækker alle lejemål af dit hus, når det lejes ud hos os. Læs betingelserne her.')
        ])
    }
}
customElements.define('question-answers', QuestionAnswers);
