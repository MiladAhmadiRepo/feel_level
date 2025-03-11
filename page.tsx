"use client"

import {   useState } from 'react';
import HAPPY_1 from "../public/happy_1.svg";
import HAPPY_2 from "../public/happy_2.svg";
import MEH_3 from "../public/meh_3.svg";
import SAD_4 from "../public/sad_4.svg";
import GRIN_5 from "../public/grin_5.svg";
import CRYING_6 from "../public/crying_6.svg";
import Image from "next/image";

export default function Home() {

    const [selectedPain, setSelectedPain] = useState(null);

    const painLevels = [
      { level: 0, color: 'bg-green-500', label: 'No Pain', face: 'smile' },
      { level: 1, color: 'bg-green-500', label: 'No Pain', face: '' },
      { level: 2, color: 'bg-green-400', label: 'Mild Pain', face: 'slight-smile' },
      { level: 3, color: 'bg-green-300', label: 'Mild Pain', face: '' },
      { level: 4, color: 'bg-yellow-400', label: 'Moderate Pain', face: 'neutral' },
      { level: 5, color: 'bg-yellow-500', label: 'Moderate Pain', face: '' },
      { level: 6, color: 'bg-amber-500', label: 'Severe Pain', face: 'slight-frown' },
      { level: 7, color: 'bg-amber-600', label: 'Severe Pain', face: '' },
      { level: 8, color: 'bg-orange-500', label: 'Very Severe Pain', face: 'frown' },
      { level: 9, color: 'bg-red-500', label: 'Very Severe Pain', face: '' },
      { level: 10, color: 'bg-red-600', label: 'Worst Pain Possible', face: 'crying' },
      { level: 11, color: 'bg-red-800', label: 'Worst Pain Possible', face: 'crying' },
    ];

    const handlePainSelection = (level:any) => {
      setSelectedPain(level);
      console.log(`Pain level ${level} selected`);
    };

    // Define emoji positions
    const emojiPositions = [
      { face: 'smile', position: 1/12 * 100, label: 'No Pain' },
      { face: 'slight-smile', position: 3/12 * 100, label: 'Mild Pain' },
      { face: 'neutral', position: 5/12 * 100, label: 'Moderate Pain' },
      { face: 'slight-frown', position: 7/12 * 100, label: 'Severe Pain' },
      { face: 'frown', position: 9/12 * 100, label: 'Very Severe Pain' },
      { face: 'crying', position: 11/12 * 100, label: 'Worst Pain Possible' },
      // { face: 'crying2', position: 12/12 * 100, label: 'Worst Pain Possible level2' },
    ];

    // Helper to render the face emoji
    const renderFace = (face:string) => {
      switch(face) {
        case 'smile':
          return (
                  <Image className="relative h-20 w-20 rounded-full bg-current" src={HAPPY_1} alt={""}></Image>
          );
        case 'slight-smile':
          return (
              <Image className="relative h-20 w-20 rounded-full bg-current" src={HAPPY_2} alt={""}></Image>
          );
        case 'neutral':
          return (
              <Image className="relative h-20 w-20 rounded-full bg-current" src={MEH_3} alt={""}></Image>
          );
        case 'slight-frown':
          return (
              <Image className="relative h-20 w-20 rounded-full bg-current" src={SAD_4} alt={""}></Image>
          );
        case 'frown':
          return (
              <Image className="relative h-20 w-20 rounded-full bg-current" src={GRIN_5} alt={""}></Image>
          );
        case 'crying':
          return (
              <Image className="relative h-20 w-20 rounded-full bg-current" src={CRYING_6} alt={""}></Image>
          );
        default:
          return null;
      }
    };

    // Calculate positions for the main divider lines that will extend all the way down
    const dividerPositions = [
      { position: 1/12 * 100, label: 'No Pain / Mild Pain' },
      { position: 2/12 * 100, label: 'No Pain / Mild Pain' },
      { position: 3/12 * 100, label: 'No Pain / Mild Pain' },
      { position: 4/12 * 100, label: 'Mild Pain / Moderate Pain' },
      { position: 5/12 * 100, label: 'Mild Pain / Moderate Pain' },
      { position: 6/12 * 100, label: 'Moderate Pain / Severe Pain' },
      { position: 7/12 * 100, label: 'Moderate Pain / Severe Pain' },
      { position: 8/12 * 100, label: 'Severe Pain / Very Severe Pain' },
      { position: 9/12 * 100, label: 'Severe Pain / Very Severe Pain' },
      { position: 10/12 * 100, label: 'Very Severe Pain / Worst Pain Possible' },
      { position: 11/12 * 100, label: 'Very Severe Pain2 / Worst Pain Possible2' },
      { position: 12/12 * 100, label: 'Very Severe Pain3 / Worst Pain Possible3' }
    ];

    return (
        <div className="max-w-4xl bg-white">
          {/* Header */}
          <div className="bg-blue-500 text-white text-center py-6 mb-3">
            <h1 className="text-4xl font-bold">PAIN SCALE</h1>
          </div>

          <div className="relative">
            {/* Extended vertical divider lines that go through both sections */}
            {dividerPositions.map((divider, index) => (
                <div
                    key={`extended-divider-${index}`}
                    className={`absolute top-0 w-px h-full ${index%2!=0 ? 'bg-black z-20' : ''}`}
                    style={{ left: `${divider.position}%`, height: '140px' }}
                ></div>
            ))}

            {/* Scale */}
            <div className="flex w-full h-16 mb-4 relative ">
              {painLevels.map((pain) => (
                  <div
                      key={pain.level}
                      className={`flex-1 ${pain.color} relative cursor-pointer transition-all hover:opacity-90 ${selectedPain === pain.level ? 'ring-4 ring-blue-500 z-10' : ''}`}
                      onClick={() => handlePainSelection(pain.level)}
                  >
                    {/*  numbers  0 to 10 */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 font-bold">{pain.level}</div>
                    {/* Bottom marker line for each number */}
                    <div className="absolute -bottom-1 w-px h-4 bg-blue-700 left-1/2 transform -translate-x-1/2"></div>
                  </div>
              ))}

              {/* Add thin vertical divider lines between all sections */}
              {painLevels.map((pain, index) => (
                  index > 0 ? (
                      <div
                          key={`divider-${index}`}
                          className="absolute top-0 w-px h-16 bg-black z-20"
                          style={{ left: `${(index / painLevels.length) * 100}%` }}
                      ></div>
                  ) : null
              ))}
            </div>

            {/* Faces - Now positioned horizontally centered between relevant scale sections */}
            <div className="w-full relative h-32">
              {emojiPositions.map((emoji, index) => {
                // Find associated level to get the color
                const associatedLevel = painLevels.find(pain => pain.face === emoji.face)?.level || 0;
                const color = painLevels.find(pain => pain.level === associatedLevel)?.color || 'bg-gray-400';
                console.log(" level : "+associatedLevel + " selected : "+selectedPain +" index: "+ index);
                const opacityLevel =  ((associatedLevel-(selectedPain??0))==-1 || (associatedLevel-(selectedPain??0))==0) ? 'opacity-100' : 'opacity-35 backdrop-blur-md';


                return (
                    <div
                        key={emoji.face}
                        className="absolute text-center z-10"
                        style={{ left: `${emoji.position}%`, transform: 'translateX(-50%)' }}
                        onClick={() => handlePainSelection(associatedLevel)}
                    >
                      <div className={`text-${color.replace('bg-', '')} ${opacityLevel}`}>
                        {renderFace(emoji.face)}
                      </div>
                      {/*<div className="mt-2 font-medium text-gray-800 text-sm whitespace-nowrap">*/}
                      {/*  {emoji.label}*/}
                      {/*</div>*/}
                    </div>
                );
              })}
            </div>
          </div>

          {/* Selection display */}
          {selectedPain !== null && (
              <div className=" text-center p-4 bg-gray-100 rounded-lg">
                <p className="text-xl">
                  You selected: <span className="font-bold text-black">Level {selectedPain}</span> -
                  {painLevels.find(p => p.level === selectedPain)?.label}
                </p>
              </div>
          )}
        </div>
    );

}
