import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import React from "react";

const Campaign = () => {
  return (
    <React.Fragment>
      <section
        aria-labelledby="Campaign Header"
        className="container mx-auto py-6 px-4"
      >
        <img
          className="rounded-xl aspect-[16/9] w-full h-1/2 object-cover mt-18"
          src="https://plus.unsplash.com/premium_photo-1753985633451-91ae0ac80456?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Portrait of Sanne"
          loading="lazy"
        />

        <div className="mt-5">
          <h1 className="text-4xl font-extrabold mb-4">
            Help mij strijden tegen uitgezaaide baarmoederhalskanker
          </h1>
          <div className="mt-2">
            <div className="inline-flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p>Fiqry choerudin</p>
            </div>
            <div className="flex my-4 items-center gap-4">
              <div>€23,968 raised</div>
              <div>-</div>
              <div> €35K goal · 939 donations</div>
            </div>
            <Progress value={100} aria-label="Campaign is 10% funded" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <button className="bg-[#274A34] text-primary font-bold px-6 py-3 rounded-lg hover:opacity-90">
              Donate Now
            </button>
            <button className="bg-primary text- font-bold px-6 py-3 rounded-lg hover:bg-primary/90">
              Share Campaign
            </button>
          </div>
        </div>
      </section>
      <section
        aria-labelledby="Campaign Description"
        className="container mx-auto py-6 px-4 border-t border-gray-300"
      >
        <p className="leading-7">
          Ik ben Linda, 32 jaar en heb uitgezaaide baarmoederhalskanker. In
          september 2024 tijdens mijn zwangerschap werd er baarmoederhalskanker
          bij mij ontdekt. Ik was 32, zwanger van mijn derde kindje. Tijdens
          deze zwangerschap heb ik chemotherapie gekregen, gelukkig is hij met
          37 weken gezond geboren met een keizersnede. Mijn jongste is nu alweer
          9 maanden en de andere twee zijn 8 en 11 jaar oud. Na zware chemo in
          mijn kraamtijd volgde een bestralingstraject van 5 zware weken. Dit
          bleek uiteindelijk niet voldoende en de kanker was in mijn
          lymfeklieren verdubbeld in plaats van kleiner geworden. Toen volgde
          een grote ingewikkelde operatie, hierbij hebben ze alle tumoren en dus
          kanker kunnen verwijderen. Maar na al twee maanden kwam de kanker
          terug, niemand had dit zien aankomen en verwacht. Helaas is het nu
          verder uitgezaaid in mijn bekken, bij mijn blaas, darmen en waar
          voorheen mijn baarmoeder zat. De artsen in Nederland hebben me nu
          alleen nog een beperkte levensverwachting gegeven. Genezing is niet
          meer mogelijk en alle behandelingen zijn palliatief. Maar ik ben niet
          klaar. Ik ben momenteel bezig met chemotherapie en immunotherapie in
          de hoop de celdeling van de kanker te remmen. Hiernaast heb ik
          therapieën die mij ondersteunen tijdens dit proces en hiervan wordt
          niks vergoed door de zorgverzekering. Ik heb drie kinderen en een
          partner. Een leven dat ik nog wil leven. In het buitenland zijn er
          behandelingen die meer hoop geven. In onze buurlanden zijn er meer
          chemotherapieën en trials beschikbaar. Helaas worden deze alleen ook
          niet vergoed door de zorgverzekering. Ze bieden geen garantie op
          genezing maar wel op meer tijd en meer kansen. Maar die kansen kosten
          geld, veel geld en dat kunnen we niet alleen Wij geven de moed niet op
          — wij zoeken naar kansen. Opgeven is voor ons geen optie ook al lijkt
          het soms hopeloos. Wij als gezin blijven leven en proberen positief te
          blijven en veel tijd met elkaar door te brengen om mooie momenten
          samen te maken. Tijd met mijn kinderen. Tijd met mijn liefde. Tijd om
          te blijven vechten. Help ons alsjeblieft. Iedere donatie, hoe klein
          ook, helpt ons om hoop om te zetten in actie. Delen helpt ook enorm.
          Heb je een goed idee voor een actie of wil je iets sponsoren laat het
          me dan vooral weten. Je kan contact met mij opnemen via [email
          redacted]. Voor meer informatie over mij en mijn verhaal in een
          uitgebreide video kan je kijken op mijn website www.lindaforlife.nl.
          Daarnaast deel ik dagelijks updates en stories op
          www.instagram.com/lindaforlife_ . Dank je wel voor je steun, je
          warmte, en je betrokkenheid. ❤️
        </p>{" "}
      </section>
      <section
        aria-labelledby="donors"
        className="container mx-auto border-t border-gray-300"
      >
        <h1 id="heading" className="text-xl font-extrabold pt-4 px-4 mb-2">
          Donations (939)
        </h1>

        <div className="p-4">
          <div className="inline-flex items-start gap-4  w-full p-4  rounded-xl">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="font-normal">
                0xf389f1ef36ac27d8AeeD7b8471358C0751307e12
              </p>
              <p className="font-bold">€23,968</p>
            </div>
          </div>
          <div className="inline-flex items-start gap-4  w-full p-4  rounded-xl">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="font-normal">
                0xf389f1ef36ac27d8AeeD7b8471358C0751307e12
              </p>
              <p className="font-bold">€23,968</p>
            </div>
          </div>
          <div className="inline-flex items-start gap-4  w-full p-4  rounded-xl">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="font-normal">
                0xf389f1ef36ac27d8AeeD7b8471358C0751307e12
              </p>
              <p className="font-bold">€23,968</p>
            </div>
          </div>
          <button className="bg-[#274A34] mt-4 w-full text-primary font-bold px-6 py-3 rounded-lg hover:opacity-90">
            See All
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Campaign;
