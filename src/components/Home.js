import React from "react"



export const HomeComponent = () => {
    return (
        <div>
    <header>
        <h1 class="h1style">
            Hej och välkommen till min personliga hemsida!
        </h1>
    </header> 

    <main>
        <section>
            <p class="homestyle">
                Jag är en snart 26-årig kille som bor i Söderhamn och har ett stort intresse inom IT och sport.
                Jag är en intresserad och nyfiken kille som har ett öppet sinne för allt jag tar mig an,
                det finns inga omöjligheter, bara möjlighter!
                Hösten 2022 valde jag att välja en ny inriktning i mitt liv, då jag valde att börja
                plugga en YH-utbildning inom systemutveckling. Tanken är att hitta ett jobb där jag
                kan utvecklas ytterligare både inom systemuteckling och som person!
                Jag kommer från att jobba inom byggbranschen, mer specifikt inom <a href="https://www.veidekke.se/tjanster/infrastruktur/grundlaggning/" target="_blank" rel="noopener noreferrer">Grundläggning</a>
                , och nu är jag sugen på att hitta på något nytt med mitt liv! 
            </p>
        </section>
    </main>

    <footer>
         2023 Hem
    </footer>
        </div>
    )
}