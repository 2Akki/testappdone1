import React from "react";
import "../css/Home.css";
import Typewriter from "typewriter-effect";
import { Link, NavLink, redirect, useNavigate } from "react-router-dom";
import { pathurl, studieretninger, studieretningerHTX } from "../data";
import Users from "../components/Users";
export default function Home() {

  const navigate = useNavigate();
  const handleCardClick = (nav) => {
    navigate(nav);
  };
  return (
    <>
      <header className="header">
        <div className="header-logo-box"></div>
        <div className="header-text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Sukker</span>
            <span className="heading-primary--sub">Toppen</span>
          </h1>
          <Link to="/spil" className="btn-text no-background ">
            Læse mere
          </Link>
        </div>
      </header>

      <main>
        <h2 className="center">
          <Typewriter
            options={{
              strings: [
                "SukkerToppen",
                "Det bedste gym der findes",
                "Computer Science",
                "Teknologi & Design",
                "Teknologi & Samfundsfag",
                "Science Kemi",
                "Science Fysik",
                "Bioinformatik",
                "Geoscience",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 100,
              delay: 140,
            }}
          />
        </h2>
        <section className="section-info">
          <div className="row-user-school">
            <div className="info-box">
              <h3 className="heading-t">
                Er du klar til at lære, udvikle dig og skabe nye venskaber?
              </h3>
              <p className="pera">
                På SukkerToppen tilbyder vi et inspirerende læringsmiljø, hvor
                faglighed og fællesskab går hånd i hånd. Vores engagerede lærere
                står altid klar til at hjælpe og støtte dig på din
                uddannelsesrejse. Vi har et stærkt studiemiljø med spændende
                fagkombinationer, moderne faciliteter og masser af sociale
                aktiviteter, såsom julefester, fredagscaféer og temadage, der
                styrker fællesskabet.
              </p>

              <h3 className="heading-2">Hos os er der plads til din evner!</h3>
              <p className="pera">
                Uanset om du brænder for teknologi, videnskab, design eller
                samfundsfag, vil du finde ligesindede elever, som deler din
                interesse. Hos os kan du fordybe dig i dine passioner, samtidig
                med at du bliver en del af et stærkt fællesskab. Har du
                spørgsmål eller vil du vide mere? Tøv ikke med at kontakte os –
                vi glæder os til at høre fra dig!
              </p>
            </div>
            <Users />
          </div>
        </section>
<section>
        <h2 className="center-heading-text h-1 m-t-4">Studieretninger</h2>
        <div className="studieretning-container">
        {studieretninger.map((studie,i)=>{
         
          return (
            <div key={i}>
            
            <div className="card" onClick={()=>{
              handleCardClick(pathurl[i])
            }} key={i}>

            <img src={studie.img}></img>
            <h2>{studie.name}</h2>
            <p>{studie.moreinfo}</p>
            
          </div>
         
          </div>
          )
          i++;
        })}
        </div>
        </section>
      </main>
      <div>
        <h2> følje sukker bloggen på Youtube</h2>

      </div>
    </>
  );
}
