import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import malheureux from "./assets/un.jpg";
import yeux from "./assets/cinq.jpg";
import etoiles from "./assets/six.jpg";
import belleVie from "./assets/trois.jpg";
import pervers from "./assets/quatre.jpg";
import clean from "./assets/deux.jpg";
import mec from "./assets/mec2.jpg";
import copine from "./assets/copine.jpg";
import pire from "./assets/pire.jpg";
import narcissique from "./assets/narcissique2.jpg";
import curieux from "./assets/curieux3.jpg";
import ranger from "./assets/naruHina.jpg";
import negliger from "./assets/negliger.jpg";
import amour from "./assets/amour3.jpg";
import deception from "./assets/alone.jpg";
function App() {
  return (
    <>
      <div className="w-screen h-20 sticky top-0 py-2 px-12 flex justify-between items-center text-white bg-gray-900">
        <h1 className="text-3xl hover:text-red-600">Giannis34</h1>
        <div>
          <button className="bg-green-500 p-2 rounded flex-initial w-32 border-solid  text-[18px]">
            <a href="http://src/login.jsx">Connexion</a>
          </button>
          <button className="bg-orange-500 p-2 rounded flex-initial m-3 w-15 h-18 border-solid  text-[12px]" >
          <a href="/src/assets/assets.rar" download>Download assets</a>
          </button>
          
        </div>
      </div>
      <div className="bg-gray-800 w-screen pt-8 flex justify-center items-center ">
        <div className="">
          <h1 className="text-gray-500 font-bold text-3xl my-2 uppercase hover:text-gray-400 transition-all  cursor-pointer">
            broken bond!
          </h1>
          <p className=" text-white p-0 m-aut0 pb-32 text-[18px] capitalize  transition-all  ">
            ça fait quelques jours que je me réveille <br />
            très malheureux <br />
            <img src={malheureux} alt="malheureux" />
            J’ai mal au cœur, j’ai mal au ventre en <br />
            plus de ça j’ai mal aux yeux <br />
            <img src={yeux} alt="yeux" />
            Regarde les étoiles, j’ai cogité toute la <br />
            night bro <br />
            <img src={etoiles} alt="etoiles" />
            Nsm le rap, ça n'a pas rendu plus belle ma <br />
            Life. <br />
            <img src={belleVie} alt="belleVie" />
            J’suis un pervers narcissique d’après ce <br />
            que dit mon ex copine bro <br />
            <img src={pervers} alt="pervers" />
            J’ai jamais dis que j’étais clean, j’ai <br />
            toujours su que j’étais le pire Bro <br />
            <img src={clean} alt="clean" />
            J’aimerai passer un message à ton <br />
            prochain mec <br />
            <img src={mec} alt="mec" />
            C’est vrai qu’on a fait des choses mais <br />
            ta copine est encore vierge <br />
            <img src={copine} alt="copine" />
            Ce qui me fait rire dans l’histoire c’est que <br />
            je savais que j’étais le pire bro <br />
            <img src={pire} alt="pire" />
            Pervers narcissique d’après ce que j’ai <br />
            entendu dire <br />
            <img src={narcissique} alt="narcissique" />
            Elle m’a rendu toxico <br />
            C’est pas sérieux mais je n’étais pas fidèle <br />
            parce que j’étais trop curieux <br />
            <img src={curieux} alt="curieux" />
            Pardon je ne vais plus tout mélanger <br />
            J’ai décidé d’être heureux donc j’vais <br />
            essayer de me ranger <br />
            <img src={ranger} alt="ranger" className="w-432 h-296" />
            T’as raison de me négliger et d’essayer de <br />
            m’oublier Car si tu penses à moi, tu mettras ton <br />
            cœur en danger <br />
            <img src={negliger} alt="negliger" />
            J’suis un garçon malhonnête, j’ai jamais <br />
            su vraiment donner l’amour qu’il fallait, <br />
            sans défauts <br />
            <img src={amour} alt="amour" />
            J’suis tellement malheureux, j’ai tellement <br />
            aux yeux
            <img src={deception} alt="deception" />
          </p>
        </div>
      </div>
      <div className="w-screen bottom-0 py-4 px-8 flex items-start justify-between text-white bg-purple-600">
        <p className="text-3xl">Ceci est la fin de tout! A toi B**tch</p>
        <div className="flex flex-col gap-4 " >
          <textarea
            name="comments"
            id="comments"
            cols="12"
            rows="1"
            placeholder="Envoyez vos commentaires à partir de cet espace"
            className="w-96 h-48 p-2 resize-none text-black  rounded-md"
          ></textarea>
          <input
            type="submit"
            value="Soumettre"
            className="bg-blue-500 p-2 rounded w-32 border-solid text-[18px]"
          />
        </div>
      </div>
    </>
  );
}

export default App;
