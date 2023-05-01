import './Players.css';
import React from 'react';

const Player = ({ name, src, key }) => {
    return (
        <li>
            <img title={name} className="resize" src={src} alt={name} key={key}/>
        </li>
    );
}

const Players = () => {
    const playersList = [];

    playersArray.forEach((player) => {
        playersList.push(
            <Player
                name={player.name}
                key={player.key}
                src={player.src} />
        );
    });

    return (
        <div className="containers">
            <h2 className="title">Players</h2>
            <p className="text">{playersList}</p>
        </div>
    );
};


const playersArray = [
    { key: 1, name: 'Adam Tuil', src: 'https://pps.whatsapp.net/v/t61.24694-24/315337338_1275153816725755_6963476375910121524_n.jpg?ccb=11-4&oh=01_AdR3IPPsk5BbD2D6067vjmrz4js9iCMxTKLqxIeH0wa3Kg&oe=64560687' },
    { key: 2, name: 'Amit Ben Yacov', src: 'https://pps.whatsapp.net/v/t61.24694-24/310563312_3072017399756189_3466982679888265312_n.jpg?ccb=11-4&oh=01_AdSNrg9nzUMoCV7r4iH2h7W7Y0_Vmc3ZkUo36acJrBZlpQ&oe=6455E1E1' },
    { key: 3, name: 'Carmel Hadar', src: 'https://pps.whatsapp.net/v/t61.24694-24/139455614_211500240644434_4795964363649109991_n.jpg?ccb=11-4&oh=01_AdSLTIvuMCxSiF5ZkBRC8h7TfTjOopfF7ZmDrme5TZtmYw&oe=6457CD58' },
    { key: 4, name: 'Dan Medem', src: 'https://pps.whatsapp.net/v/t61.24694-24/338795761_1008967900459615_3477255763096865916_n.jpg?ccb=11-4&oh=01_AdRJ2_jk9yPkmUabQ_o7RGoAl_3xDu5x4cIVYcqeAhvTsw&oe=64579A4E' },
    { key: 5, name: 'Dan Schapiro', src: 'https://pps.whatsapp.net/v/t61.24694-24/166226910_326757342580524_7844063546608063559_n.jpg?ccb=11-4&oh=01_AdSFA22gF5yUKv97xRbHq-GoQvu4VPyyh0s7vw_lohFCOA&oe=6455F89C' },
    { key: 6, name: 'Eran Efrima', src: 'https://pps.whatsapp.net/v/t61.24694-24/119841297_321665932388380_4935935463221782618_n.jpg?ccb=11-4&oh=01_AdSuG4TAUxIp6fg8fBJEHhZpLGsgW_xozy2MKiS7wNQzgQ&oe=6457BD54' },
    { key: 7, name: 'Itay Shabtay', src: 'https://pps.whatsapp.net/v/t61.24694-24/56377976_2271132773206631_6836875391567659008_n.jpg?ccb=11-4&oh=01_AdQzN8F5OAv797lQbN1kVwF-LIs-kX-rO7DhQsEkwX4h8Q&oe=645638CC' },
    { key: 8, name: 'Matan Schapiro', src: 'https://pps.whatsapp.net/v/t61.24694-24/285968356_748063443215645_2589755731624067803_n.jpg?ccb=11-4&oh=01_AdRdkleZVYK2TWGHlPXCUCeKgcaJS2ld4JWI71ohhjjvVA&oe=645B4DA9' },
    { key: 9, name: 'Nir Schapiro', src: 'https://a4.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fmisc_logos%2F500%2Fnba.png' },
    { key: 10, name: 'Omri Lux', src: 'https://pps.whatsapp.net/v/t61.24694-24/243526586_399330161703125_5934917342709872775_n.jpg?ccb=11-4&oh=01_AdTdWn7SrauURb1_P3Odiqi0CLkOQpglRPCkv1_jxJRS7w&oe=6455DDA9' },
    { key: 11, name: 'Oren Holtzman', src: 'https://pps.whatsapp.net/v/t61.24694-24/123933041_399575978024428_8892222854656504497_n.jpg?ccb=11-4&oh=01_AdQMNYhDNEa9p-OlYhAkRjgq900yZ_b5vQcEAO7EJZm9cA&oe=645B65C9' },
    { key: 12, name: 'Roei Barkai', src: 'https://pps.whatsapp.net/v/t61.24694-24/320849101_549503823581684_3003714408609421181_n.jpg?ccb=11-4&oh=01_AdS-IXdY15fGPZfMbtiybmAdbKOU_KMVusmsDVbU7b_P7A&oe=6459EBBB' },
    { key: 13, name: 'Tomer Schapiro', src: 'https://pps.whatsapp.net/v/t61.24694-24/306535570_118801244298677_6984714552019201333_n.jpg?ccb=11-4&oh=01_AdSayH1mEKHppx-8jBdDEr-QvdAtzVdywOE7L_ETaC_Yiw&oe=6458C4D0' },
    { key: 14, name: 'Tor Sadeh', src: 'https://pps.whatsapp.net/v/t61.24694-24/85533188_241408023568769_7888583541616864621_n.jpg?ccb=11-4&oh=01_AdRrPemdDkuwqRu9y31IbZAEdnzsXstywo7qOjdxcIWv4w&oe=645B6225' },
    { key: 15, name: 'Yinon Shirazi', src: 'https://pps.whatsapp.net/v/t61.24694-24/151215235_2858647067727240_3137554990415310315_n.jpg?ccb=11-4&oh=01_AdQjKpaESX1gOZX76qLl9ZrIm50tPCQyVPqLMvGu5Vgx3Q&oe=6459F707' },
    { key: 16, name: 'Daniel Zimer', src: 'https://pps.whatsapp.net/v/t61.24694-24/55987379_424242738309938_5566122193634459648_n.jpg?ccb=11-4&oh=01_AdQZqNzgPGZG2-yLT453f-RWwlm8VkvhcB39InNTNuzjLA&oe=645B4B5A' }
];

export default Players;
