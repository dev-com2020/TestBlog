import React from 'react'
import MainLayout from '../layouts/index';
import styled from 'styled-components';

const StyledWrapper = styled.div`
width:80vw;
margin: 0 auto;
`;
const StyledHeading = styled.h2`
font-size: 2.5rem;
font-weight: 700;
`;
const StyledRegHeading = styled.h3`
font-size: 2.1rem;
font-weight: 700;
`;
const StyledParagraph = styled.p`
font-size:1.8rem;
font-weight: 400;
`;

const RegPage = () => {
    return (
        <MainLayout isCategory isBaner>
            <StyledWrapper>
                <StyledHeading>
                    Regulamin:
    </StyledHeading>
                <StyledRegHeading>
                    1. Postanowienia ogólne
        </StyledRegHeading>
                <StyledParagraph>
                    1. Niniejszy Regulamin określa zasady funkcjonowania oraz warunki korzystania z serwisu „test-blog.info.pl”, zwanego dalej Serwisem. Regulamin definiuje prawa i obowiązki korzystających z niego Użytkowników oraz administratora Serwisu w zakresie świadczenia usług drogą elektroniczną.
        </StyledParagraph>
                <StyledParagraph>
                    2. „Serwis” oznacza witrynę internetową znajdującą się pod adresem test-blog.info.pl wraz ze wszelkimi jej podstronami, w tym z wszelkimi dodatkowymi platformami skupionymi w ramach Test Blog, w szczególności: Blog Forum, Zapytaj Test Blog i innymi.
                    3. Administratorem Serwisu jest firma Fundacja Rozwoju Przedsiębiorczości "Twój StartUP" DEV-COM ul. Żurawia 6/12 lok 766, 00-503 Warszawa
                    NIP: 5213641211, REGON: 146433467, KRS: 0000442857
                </StyledParagraph>
                <StyledParagraph>
                    4. „Użytkownikiem” jest każda osoba, która odwiedza witryny skupione w ramach Serwisu.
                </StyledParagraph>
                <StyledParagraph>
                    5. „Użytkownikiem Zarejestrowanym” jest osoba fizyczna lub prawna, która zarejestrowała konto bezpośrednio w Serwisie lub w ramach zewnętrznych usług technologicznych umożliwiających korzystanie z infrastruktury Serwisu (np. Disqus, Facebook, Wordpress, itp.). Rejestracja w serwisie nie jest obowiązkowa.
                </StyledParagraph>
                <StyledParagraph>
                    6. Administrator zastrzega sobie prawo do ograniczenia dostępu do niektórych treści lub funkcji serwisu wedle przyjętych przez siebie kryteriów, w szczególności uzależnienia ich od zarejestrowania konta, uiszczenia opłaty i innych wskazanych przez siebie okoliczności.
                </StyledParagraph>
                <StyledParagraph>
                    7. Administrator zastrzega sobie prawo do dokonywania zmian w treści Regulaminu, jak również wprowadzenia nowego regulaminu, w szczególności jeśli zmiany te spowodowane będą okolicznościami faktycznymi lub prawnymi.
                </StyledParagraph>
                <StyledParagraph>
                    8. Jednocześnie Administrator zobowiązuje się do poinformowania Użytkowników o wszelkich zmianach dokonywanych w Regulaminie w formie publikacji w serwisie, wyświetleniu stosownego komunikatu lub też w innej postaci umożliwiającej zapoznanie się ze zmianami Użytkownikom, np. poprzez modyfikację daty wskazującej czas ostatniej aktualizacji Regulaminu.
                </StyledParagraph>
                <StyledParagraph>
                    9. Prawem właściwym dla wszelkich stosunków prawnych wynikających z niniejszego Regulaminu jest prawo polskie. Spory rozstrzygane będą przez polskie sądy właściwe dla danej sprawy.
                </StyledParagraph>
                <StyledParagraph>
                    10. Działanie Serwisu podlega prawu polskiemu. Spory wynikłe z korzystania z serwisu rozstrzygane będą przez polskie sądy właściwe dla danej sprawy.
                </StyledParagraph>
                <StyledParagraph>
                    11. W kwestiach nieuregulowanych niniejszym regulaminem zastosowanie znajdują przepisy polskiego prawa, w szczególności kodeksu cywilnego i innych ustaw.
                </StyledParagraph>
                <StyledParagraph>
                    12. Regulamin Serwisu dostępny jest dla wszystkich Użytkowników pod adresem http://test-blog.info.pl/regulamin.html
                </StyledParagraph>
                <StyledRegHeading>
                    2. Warunki techniczne korzystania z serwisu
        </StyledRegHeading>
                <StyledParagraph>
                    1. Do korzystania z Serwisu niezbędne jest posiadanie urządzenia elektronicznego (np. komputer, telefon, tablet, telewizor i inne) wyposażonego w możliwie aktualną przeglądarkę internetową. Serwis nie ponosi odpowiedzialności jeżeli urządzenie Użytkownika nie jest w stanie prawidłowo emitować treści.
        </StyledParagraph>
                <StyledParagraph>
                    2. Dostęp do niektórych funkcji Serwisu może być uzależniony od instalacji dodatkowych wtyczek zewnętrznych pozwalających na obsługę standardów takich jak Flash, Silverlight, Java i innych.
        </StyledParagraph>
                <StyledParagraph>
                    3. Dostęp do niektórych funkcji Serwisu może być uzależniony od konieczności posiadania konta w Serwisie lub usłudze zewnętrznej (np. Disqus, Wordpress, Facebook, konto e-mail).
        </StyledParagraph>
                <StyledParagraph>
                    4. Serwis może wyświetlać reklamy.
        </StyledParagraph>
                <StyledRegHeading>
                    3. Prawo autorskie
        </StyledRegHeading>
                <StyledParagraph>
                    1. Wszelkie treści opublikowane w ramach Serwisu podlegają ochronie prawnoautorskiej, w szczególności w zakresie: artykułów, wykorzystanych zdjęć i filmów. Prawa autorskie przysługują Serwisowi i/lub twórcom.
        </StyledParagraph>
                <StyledParagraph>
                    2. Zabronione jest kopiowanie i rozpowszechnianie treści Serwisu w zakresie przekraczającym tzw. dozwolony użytek zdefiniowany przez ustawę o prawie autorskim i prawach pokrewnych z dn. 4 lutego 1994 roku. Dozwolone jest linkowanie bezpośrednio do artykułów serwisu.
        </StyledParagraph>
                <StyledParagraph>
                    3. Użytkownik dokonujący publikacji treści w ramach systemu komentarzy lub innych platform Test-Blog oświadcza, że posiada pełne prawo do wszelkich treści publikowanych przez siebie w Serwisie – w szczególności do tekstów, grafik, filmów i dźwięków lub też materiały multimedialne zostały wykorzystane w ramach odpowiednich licencji i we właściwy sposób ich pochodzenie zostało oznaczone.
</StyledParagraph>
                <StyledParagraph>
                    4. Użytkownik oświadcza, że bierze na siebie pełną odpowiedzialność wynikającą z tytułu naruszenia przez niego praw autorskich w wyniku publikacji w treści w Serwisie.
</StyledParagraph>
                <StyledParagraph>
                    5. Zamieszczenie jakichkolwiek materiałów w serwisie jest równoznaczne z ich publicznym udostępnieniem. Użytkownik zachowuje pełnię praw autorskich do publikowanych przez siebie treści, publikacji dokonuje dobrowolnie i nieodpłatnie, publikacja może być w każdej chwili przez niego odwołana po dokonaniu stosownego zgłoszenia do Administratora.
</StyledParagraph>
                <StyledParagraph>
                    6. Administrator oświadcza, iż nie ponosi odpowiedzialności za ewentualne naruszenia praw autorskich przez jego Użytkowników, jednocześnie oferując pełną współpracę w zakresie eliminowania tych treści zgodnie z dyspozycją art. 14 ustawy o świadczeniu usług drogą elektroniczną z dn. 18 lipca 2002 roku.
</StyledParagraph>
                <StyledRegHeading>
                    4. Prawa i obowiązki użytkownika
        </StyledRegHeading>
                <StyledParagraph>
                    1. Internauta nabywa status Użytkownika wraz z uruchomieniem w przeglądarce internetowej dowolnej z podstron Serwisu.
       </StyledParagraph>
                <StyledParagraph>
                    2. Użytkownik staje się Użytkownikiem Zarejestrowanym w chwili założenia konta w Serwisie lub też w chwili publikacji pierwszej treści (np. komentarza) przy użyciu konta założonego w odrębnej usłudze społecznościowej (np. Disqus, Facebook, Wordpress) zintegrowanej z infrastrukturą techniczną Serwisu. Każdy Użytkownik Zarejestrowany jest równocześnie Użytkownikiem.
</StyledParagraph>
                <StyledParagraph>
                    3. Użytkownik serwisu może występować jako osoba fizyczna lub osoba prawna, jeżeli po zweryfikowaniu swojej tożsamości reprezentuje stanowisko któregoś z podmiotów gospodarczych zainteresowanych uczestnictwem w dyskusji.
</StyledParagraph>
                <StyledParagraph>
                    4. Korzystający z serwisu Użytkownicy zobowiązani są do przestrzegania niniejszego Regulaminu oraz przepisów polskiego prawa.
</StyledParagraph>
                <StyledParagraph>
                    5. Użytkownik ma prawo do korzystania z serwisu poprzez przeglądanie i lekturę jego zasobów z wyłączeniem treści, do których dostęp Administrator ogranicza wedle przyjętych przez siebie kryteriów.
</StyledParagraph>
                <StyledParagraph>
                    6. Użytkownik Zarejestrowany zyskuje ponadto prawo do tworzenia autorskich treści w zakresie artykułów w ramach platformy „Blog Forum”, jak również uczestnictwa w dyskusji za pośrednictwem systemu komentarzy i platformy „Zapytaj Test Blog”.
</StyledParagraph>
                <StyledParagraph>
                    7. Użytkownik zobowiązuje się do przestrzegania przepisów prawa oraz dobrych obyczajów, m.in. poprzez powstrzymywanie się od publikacji treści naruszających dobra osobiste lub uczucia innych Użytkowników, treści powszechnie uznawanych za wulgarne, dyskryminujące, obsceniczne, poufne, naruszające granice dobrego smaku i inne treści, które w ocenie Administratora zostaną uznane za niewłaściwe.
</StyledParagraph>
                <StyledParagraph>
                    8. Użytkownik zobowiązuje się do powstrzymania od wszelkich praktyk, które mogłyby narazić techniczne i merytoryczne aspekty funkcjonowania serwisu, w szczególności od spamowania, nieuzgodnionych działań reklamowych, zachowań, które mogą zostać uznane za celowe próby destabilizacji technicznego zaplecza Serwisu (ataki DDoS).
</StyledParagraph>
                <StyledParagraph>
                    9. Administrator zastrzega sobie prawo do usuwania treści, które będą naruszały niniejszy Regulamin, jak również nieuwzględnione w nim powszechnie obowiązujące w życiu społecznym wartości.
</StyledParagraph>
                <StyledParagraph>
                    10. Administrator zastrzega sobie prawo do blokowania dostępu do Serwisu lub określonych funkcji Serwisu Użytkownikom, którzy nagminnie będą łamali postanowienia Regulaminu, w szczególności poprzez usuwanie lub blokadę kont Użytkowników Zarejestrowanych, jak również określonych adresów IP.
</StyledParagraph>
                <StyledParagraph>
                    11. Administrator zastrzega prawo do usunięcia konta Użytkownika Zarejestrowanego, jeśli ten nie logował się na nie na przestrzeni jednego roku.
</StyledParagraph>
                <StyledParagraph>
                    12. W przypadku łamania przepisów prawa przez Użytkowników lub działania na szkodę Serwisu, Administrator zastrzega sobie prawo do podjęcia stosownych działań prawnych, jak również udostępniania niezbędnych danych zainteresowanym organom ścigania.
</StyledParagraph>
                <StyledParagraph>
                    13. Administrator zastrzega sobie prawo do stosowania sankcji wskazanych w pkt. 10 niniejszego działu wedle własnego uznania i bez potrzeby argumentowania swoich decyzji.
</StyledParagraph>
                <StyledRegHeading>
                    5. Dane osobowe i ochrona prywatności
        </StyledRegHeading>
                <StyledParagraph>
                    1. Wraz z uzyskaniem statusu Użytkownika Zarejestrowanego, Użytkownik wyraża zgodę na przetwarzanie przez Administratora udostępnionych przez siebie danych osobowych w celu realizacji usług świadczonych przez Serwis, w ramach i z uwzględnieniem zastrzeżeń niniejszego regulaminu.
        </StyledParagraph>
                <StyledParagraph>
                    2. Użytkownik Zarejestrowany zgadza się na publiczne emitowanie udostępnionych przez niego danych w ramach utworzenia tzw. profilu użytkownika.
</StyledParagraph>
                <StyledParagraph>
                    3. Użytkownikowi Zarejestrowanemu przysługuje prawo wglądu do dotyczących go danych osobowych oraz prawo do ich weryfikacji, modyfikacji lub usunięcia z wyłączeniem danych pozyskiwanych automatycznie przez infrastrukturę Serwisu.
</StyledParagraph>
                <StyledParagraph>
                    4. Użytkownik Zarejestrowany, o ile nie dokonał tego we własnym zakresie, wyraża zgodę na równoczesne utworzenie przy pomocy podanych przez siebie danych konta w społecznościowej usłudze Disqus. Konto to jest niezbędne do korzystania z niektórych funkcji Serwisu.
</StyledParagraph>
                <StyledParagraph>
                    5. Administratorem danych osobowych jest Administrator Serwisu działający zgodnie z przepisami ustawy z dn. 29 sierpnia 1997 roku o ochronie danych osobowych oraz ustawy z dn. 18 lipca 2002 roku o świadczeniu usług drogą elektroniczną.
</StyledParagraph>
                <StyledParagraph>
                    6. Administrator może powierzyć przetwarzanie danych osobowych zewnętrznemu podmiotowi.
</StyledParagraph>
                <StyledParagraph>
                    7. Administrator nie ponosi odpowiedzialności za dane przetwarzane przez zewnętrzne, połączone z Serwisem usługi.
</StyledParagraph>
                <StyledParagraph>
                    8. Administrator otoczy szczególną ochroną i nie będzie udostępniał bez wiedzy i zgody Użytkownika Zarejestrowanego powierzonych mu w toku rejestracji danych osobowych podmiotom trzecim, za wyjątkiem sytuacji przewidzianych prawem polskim lub postanowieniami niniejszego regulaminu.
</StyledParagraph>
                <StyledParagraph>
                    9. Użytkownik Zarejestrowany wyraża zgodę na przetwarzanie i wykorzystywanie danych osobowych przez Administratora do celów własnych w okolicznościach uzasadnionych potrzebą wysłania Użytkownikowi powiadomień o istotnych kwestiach związanych z funkcjonowaniem Serwisu.
</StyledParagraph>
                <StyledParagraph>
                    10. Serwis wykorzystuje pliki cookies własne oraz należące do zewnętrznych podmiotów zgodnie z dyspozycją ustawy Prawo telekomunikacyjne z dn. 16 lipca 2004 roku.
</StyledParagraph>
                <StyledParagraph>
                    11. Pliki cookies gromadzone w ramach Serwisu wykorzystywane są w realizowaniu celów funkcjonalnych witryny dla wygody Użytkownika, pomagają również w realizowaniu celów statystycznych, reklamowych i społecznościowych.
</StyledParagraph>
                <StyledParagraph>
                    12. Użytkownik w każdej chwili może wyłączyć lub ograniczyć warunki przechowywania lub dostępu do plików cookies w ustawieniach przeglądarki internetowej
</StyledParagraph>
                <StyledRegHeading>
                    7. Wyłączenie odpowiedzialności
        </StyledRegHeading>
                <StyledParagraph>
                    1. Administrator zastrzega sobie prawo do przerw i zakłóceń w działaniu witryny, wprowadzaniu ograniczeń terytorialnych lub wiekowych w dostępie, jak również zamknięcia Serwisu bez uprzedniego zawiadomienia.</StyledParagraph>
                <StyledParagraph>
                    2. Administrator nie ponosi odpowiedzialności za działania Użytkowników i osób trzecich w zakresie naruszania prawa na łamach serwisu w drodze publikacji treści bądź profili Użytkowników Zarejestrowanych. Pełną i osobistą odpowiedzialność w tym zakresie ponosi Użytkownik.
</StyledParagraph>
                <StyledParagraph>
                    3. Administrator nie ponosi odpowiedzialności za działania osób trzecich wynikające z bezprawnego dostępu do ogółu danych osobowych lub też danych pojedynczych Użytkowników, próby przejęcia kont, itp.
</StyledParagraph>
                <StyledRegHeading>
                    8. Postanowienia końcowe
        </StyledRegHeading>
                <StyledParagraph>
                    1. Niniejszy regulamin zaczyna obowiązywać z chwilą ogłoszenia go w serwisie.
        </StyledParagraph>
                <StyledParagraph>
                    2. Data ostatniej aktualizacji regulaminu: 7 stycznia 2021 roku.
        </StyledParagraph>
                <StyledParagraph>
                    3. Korzystanie z Serwisu, zarówno przez Użytkownika, jak i Użytkownika Zarejestrowanego jest równoznaczne z akceptacją regulaminu.
        </StyledParagraph>
            </StyledWrapper>
        </MainLayout>
    );
}

export default RegPage;
