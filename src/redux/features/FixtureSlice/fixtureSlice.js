import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import options from "../../../requestOptions"

const initialState = {
  data: [
    [
      {
        fixture: {
          id: 1034678,
          referee: "M. Bîrsan",
          timezone: "Asia/Yerevan",
          date: "2023-06-27T17:00:00+04:00",
          timestamp: 1687870800,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 820,
            name: "Kópavogsvöllur",
            city: "Kópavogur",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 2,
          name: "UEFA Champions League",
          country: "World",
          logo: "https://media-1.api-sports.io/football/leagues/2.png",
          flag: null,
          season: 2023,
          round: "Preliminary Round",
        },
        teams: {
          home: {
            id: 3345,
            name: "Atlètic Club d'Escaldes",
            logo: "https://media-2.api-sports.io/football/teams/3345.png",
            winner: null,
          },
          away: {
            id: 579,
            name: "Buducnost Podgorica",
            logo: "https://media-1.api-sports.io/football/teams/579.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1034679,
          referee: "M. Kristoffersen",
          timezone: "Asia/Yerevan",
          date: "2023-06-27T23:00:00+04:00",
          timestamp: 1687892400,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 820,
            name: "Kópavogsvöllur",
            city: "Kópavogur",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 2,
          name: "UEFA Champions League",
          country: "World",
          logo: "https://media-1.api-sports.io/football/leagues/2.png",
          flag: null,
          season: 2023,
          round: "Preliminary Round",
        },
        teams: {
          home: {
            id: 700,
            name: "Tre Penne",
            logo: "https://media-2.api-sports.io/football/teams/700.png",
            winner: null,
          },
          away: {
            id: 276,
            name: "Breidablik",
            logo: "https://media-2.api-sports.io/football/teams/276.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 1036606,
          referee: "Adonai Escobedo Gonzalez, Mexico",
          timezone: "Asia/Yerevan",
          date: "2023-06-27T02:30:00+04:00",
          timestamp: 1687818600,
          periods: {
            first: 1687818600,
            second: 1687822200,
          },
          venue: {
            id: 11976,
            name: "DRV PNK Stadium",
            city: "Fort Lauderdale, Florida",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 22,
          name: "CONCACAF Gold Cup",
          country: "World",
          logo: "https://media-3.api-sports.io/football/leagues/22.png",
          flag: null,
          season: 2023,
          round: "Group Stage - 1",
        },
        teams: {
          home: {
            id: 5159,
            name: "El Salvador",
            logo: "https://media-2.api-sports.io/football/teams/5159.png",
            winner: false,
          },
          away: {
            id: 8117,
            name: "Martinique",
            logo: "https://media-1.api-sports.io/football/teams/8117.png",
            winner: true,
          },
        },
        goals: {
          home: 1,
          away: 2,
        },
        score: {
          halftime: {
            home: 0,
            away: 2,
          },
          fulltime: {
            home: 1,
            away: 2,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1023105,
          referee: "Drew Fischer, Canada",
          timezone: "Asia/Yerevan",
          date: "2023-06-27T04:30:00+04:00",
          timestamp: 1687825800,
          periods: {
            first: 1687825800,
            second: 1687829400,
          },
          venue: {
            id: 11976,
            name: "DRV PNK Stadium",
            city: "Fort Lauderdale, Florida",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 22,
          name: "CONCACAF Gold Cup",
          country: "World",
          logo: "https://media-3.api-sports.io/football/leagues/22.png",
          flag: null,
          season: 2023,
          round: "Group Stage - 1",
        },
        teams: {
          home: {
            id: 29,
            name: "Costa Rica",
            logo: "https://media-3.api-sports.io/football/teams/29.png",
            winner: false,
          },
          away: {
            id: 11,
            name: "Panama",
            logo: "https://media-3.api-sports.io/football/teams/11.png",
            winner: true,
          },
        },
        goals: {
          home: 1,
          away: 2,
        },
        score: {
          halftime: {
            home: 0,
            away: 1,
          },
          fulltime: {
            home: 1,
            away: 2,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 1027961,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T14:00:00+04:00",
          timestamp: 1687860000,
          periods: {
            first: 1687860000,
            second: 1687863600,
          },
          venue: {
            id: 2275,
            name: "Sree Kanteerava Stadium",
            city: "Bangalore",
          },
          status: {
            long: "Second Half",
            short: "2H",
            elapsed: 58,
          },
        },
        league: {
          id: 28,
          name: "SAFF Championship",
          country: "World",
          logo: "https://media-1.api-sports.io/football/leagues/28.png",
          flag: null,
          season: 2023,
          round: "Group Stage - 3",
        },
        teams: {
          home: {
            id: 1545,
            name: "Nepal",
            logo: "https://media-2.api-sports.io/football/teams/1545.png",
            winner: null,
          },
          away: {
            id: 5535,
            name: "Pakistan",
            logo: "https://media-2.api-sports.io/football/teams/5535.png",
            winner: null,
          },
        },
        goals: {
          home: 0,
          away: 0,
        },
        score: {
          halftime: {
            home: 0,
            away: 0,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1027962,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T18:00:00+04:00",
          timestamp: 1687874400,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 2275,
            name: "Sree Kanteerava Stadium",
            city: "Bangalore",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 28,
          name: "SAFF Championship",
          country: "World",
          logo: "https://media-1.api-sports.io/football/leagues/28.png",
          flag: null,
          season: 2023,
          round: "Group Stage - 3",
        },
        teams: {
          home: {
            id: 1537,
            name: "India",
            logo: "https://media-2.api-sports.io/football/teams/1537.png",
            winner: null,
          },
          away: {
            id: 1570,
            name: "Kuwait",
            logo: "https://media-3.api-sports.io/football/teams/1570.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 967795,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T20:00:00+04:00",
          timestamp: 1687881600,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 691,
            name: "Boris Paichadze Dinamo Arena",
            city: "Tbilisi",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 38,
          name: "UEFA U21 Championship",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/38.png",
          flag: null,
          season: 2023,
          round: "Group Stage - 3",
        },
        teams: {
          home: {
            id: 8211,
            name: "Netherlands U21",
            logo: "https://media-3.api-sports.io/football/teams/8211.png",
            winner: null,
          },
          away: {
            id: 8195,
            name: "Georgia U21",
            logo: "https://media-2.api-sports.io/football/teams/8195.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 967796,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T20:00:00+04:00",
          timestamp: 1687881600,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 2302,
            name: "Mikheil Meskhis sakhelobis Stadioni",
            city: "Tbilisi",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 38,
          name: "UEFA U21 Championship",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/38.png",
          flag: null,
          season: 2023,
          round: "Group Stage - 3",
        },
        teams: {
          home: {
            id: 8216,
            name: "Portugal U21",
            logo: "https://media-2.api-sports.io/football/teams/8216.png",
            winner: null,
          },
          away: {
            id: 8183,
            name: "Belgium U21",
            logo: "https://media-1.api-sports.io/football/teams/8183.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 967797,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T22:45:00+04:00",
          timestamp: 1687891500,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 12042,
            name: "Stadionul Steaua",
            city: "București",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 38,
          name: "UEFA U21 Championship",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/38.png",
          flag: null,
          season: 2023,
          round: "Group Stage - 3",
        },
        teams: {
          home: {
            id: 8186,
            name: "Croatia U21",
            logo: "https://media-1.api-sports.io/football/teams/8186.png",
            winner: null,
          },
          away: {
            id: 8218,
            name: "Romania U21",
            logo: "https://media-1.api-sports.io/football/teams/8218.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 967798,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T22:45:00+04:00",
          timestamp: 1687891500,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 19516,
            name: "Superbet Arena-Giulești",
            city: "București",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 38,
          name: "UEFA U21 Championship",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/38.png",
          flag: null,
          season: 2023,
          round: "Group Stage - 3",
        },
        teams: {
          home: {
            id: 8224,
            name: "Spain U21",
            logo: "https://media-2.api-sports.io/football/teams/8224.png",
            winner: null,
          },
          away: {
            id: 8228,
            name: "Ukraine U21",
            logo: "https://media-3.api-sports.io/football/teams/8228.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 1005760,
          referee: "Rafael Rodrigo Klein, Brazil",
          timezone: "Asia/Yerevan",
          date: "2023-06-27T04:00:00+04:00",
          timestamp: 1687824000,
          periods: {
            first: 1687824000,
            second: 1687827600,
          },
          venue: {
            id: 19377,
            name: "Estádio São Januário",
            city: "Rio de Janeiro, Rio de Janeiro",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 71,
          name: "Serie A",
          country: "Brazil",
          logo: "https://media-2.api-sports.io/football/leagues/71.png",
          flag: "https://media-1.api-sports.io/flags/br.svg",
          season: 2023,
          round: "Regular Season - 12",
        },
        teams: {
          home: {
            id: 133,
            name: "Vasco DA Gama",
            logo: "https://media-1.api-sports.io/football/teams/133.png",
            winner: true,
          },
          away: {
            id: 1193,
            name: "Cuiaba",
            logo: "https://media-1.api-sports.io/football/teams/1193.png",
            winner: false,
          },
        },
        goals: {
          home: 1,
          away: 0,
        },
        score: {
          halftime: {
            home: 0,
            away: 0,
          },
          fulltime: {
            home: 1,
            away: 0,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 1034670,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T01:30:00+04:00",
          timestamp: 1687815000,
          periods: {
            first: 1687815000,
            second: 1687818600,
          },
          venue: {
            id: null,
            name: "Parque São Jorge",
            city: "São Paulo, São Paulo",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 74,
          name: "Brasileiro Women",
          country: "Brazil",
          logo: "https://media-3.api-sports.io/football/leagues/74.png",
          flag: "https://media-2.api-sports.io/flags/br.svg",
          season: 2023,
          round: "Quarter-finals",
        },
        teams: {
          home: {
            id: 1798,
            name: "Corinthians W",
            logo: "https://media-3.api-sports.io/football/teams/1798.png",
            winner: true,
          },
          away: {
            id: 9980,
            name: "Cruzeiro W",
            logo: "https://media-1.api-sports.io/football/teams/9980.png",
            winner: false,
          },
        },
        goals: {
          home: 4,
          away: 2,
        },
        score: {
          halftime: {
            home: 2,
            away: 1,
          },
          fulltime: {
            home: 4,
            away: 2,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 1012483,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T03:00:00+04:00",
          timestamp: 1687820400,
          periods: {
            first: 1687820400,
            second: 1687824000,
          },
          venue: {
            id: 256,
            name: "Estádio Germano Krüger",
            city: "Ponta Grossa, Paraná",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 75,
          name: "Serie C",
          country: "Brazil",
          logo: "https://media-3.api-sports.io/football/leagues/75.png",
          flag: "https://media-1.api-sports.io/flags/br.svg",
          season: 2023,
          round: "Regular Season - 10",
        },
        teams: {
          home: {
            id: 1223,
            name: "Operario-PR",
            logo: "https://media-2.api-sports.io/football/teams/1223.png",
            winner: true,
          },
          away: {
            id: 1202,
            name: "Aparecidense",
            logo: "https://media-2.api-sports.io/football/teams/1202.png",
            winner: false,
          },
        },
        goals: {
          home: 1,
          away: 0,
        },
        score: {
          halftime: {
            home: 1,
            away: 0,
          },
          fulltime: {
            home: 1,
            away: 0,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 1028556,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T19:30:00+04:00",
          timestamp: 1687879800,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 4870,
            name: "Gutavallen",
            city: "Gotland",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 115,
          name: "Svenska Cupen",
          country: "Sweden",
          logo: "https://media-3.api-sports.io/football/leagues/115.png",
          flag: "https://media-3.api-sports.io/flags/se.svg",
          season: 2023,
          round: "1st Round",
        },
        teams: {
          home: {
            id: 6671,
            name: "Gute",
            logo: "https://media-3.api-sports.io/football/teams/6671.png",
            winner: null,
          },
          away: {
            id: 6700,
            name: "Stocksund",
            logo: "https://media-2.api-sports.io/football/teams/6700.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1028557,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T21:00:00+04:00",
          timestamp: 1687885200,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 7646,
            name: "Tibblevallen",
            city: "Täby",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 115,
          name: "Svenska Cupen",
          country: "Sweden",
          logo: "https://media-3.api-sports.io/football/leagues/115.png",
          flag: "https://media-3.api-sports.io/flags/se.svg",
          season: 2023,
          round: "1st Round",
        },
        teams: {
          home: {
            id: 11663,
            name: "Täby",
            logo: "https://media-2.api-sports.io/football/teams/11663.png",
            winner: null,
          },
          away: {
            id: 16601,
            name: "United Nordic",
            logo: "https://media-2.api-sports.io/football/teams/16601.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1028558,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T21:00:00+04:00",
          timestamp: 1687885200,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 4875,
            name: "Österås IP",
            city: "Hässleholm",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 115,
          name: "Svenska Cupen",
          country: "Sweden",
          logo: "https://media-3.api-sports.io/football/leagues/115.png",
          flag: "https://media-3.api-sports.io/flags/se.svg",
          season: 2023,
          round: "1st Round",
        },
        teams: {
          home: {
            id: 6676,
            name: "Hässleholms IF",
            logo: "https://media-2.api-sports.io/football/teams/6676.png",
            winner: null,
          },
          away: {
            id: 12617,
            name: "Räppe",
            logo: "https://media-3.api-sports.io/football/teams/12617.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 971599,
          referee: "Dario Herrera, Argentina",
          timezone: "Asia/Yerevan",
          date: "2023-06-27T03:00:00+04:00",
          timestamp: 1687820400,
          periods: {
            first: 1687820400,
            second: 1687824000,
          },
          venue: {
            id: 45,
            name: "Estadio Julio César Villagra",
            city: "Ciudad de Córdoba, Provincia de Córdoba",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 128,
          name: "Liga Profesional Argentina",
          country: "Argentina",
          logo: "https://media-3.api-sports.io/football/leagues/128.png",
          flag: "https://media-1.api-sports.io/flags/ar.svg",
          season: 2023,
          round: "1st Phase - 21",
        },
        teams: {
          home: {
            id: 440,
            name: "Belgrano Cordoba",
            logo: "https://media-3.api-sports.io/football/teams/440.png",
            winner: true,
          },
          away: {
            id: 449,
            name: "Banfield",
            logo: "https://media-2.api-sports.io/football/teams/449.png",
            winner: false,
          },
        },
        goals: {
          home: 3,
          away: 1,
        },
        score: {
          halftime: {
            home: 1,
            away: 0,
          },
          fulltime: {
            home: 3,
            away: 1,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 1028268,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T22:00:00+04:00",
          timestamp: 1687888800,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 2594,
            name: "Stade du 20 Août 1955",
            city: "Bechar",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 186,
          name: "Ligue 1",
          country: "Algeria",
          logo: "https://media-2.api-sports.io/football/leagues/186.png",
          flag: "https://media-1.api-sports.io/flags/dz.svg",
          season: 2022,
          round: "Regular Season - 24",
        },
        teams: {
          home: {
            id: 914,
            name: "JS Saoura",
            logo: "https://media-1.api-sports.io/football/teams/914.png",
            winner: null,
          },
          away: {
            id: 910,
            name: "USM Alger",
            logo: "https://media-3.api-sports.io/football/teams/910.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 1019123,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T19:30:00+04:00",
          timestamp: 1687879800,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 19755,
            name: "Stade Olympique Hammadi Agrebi",
            city: "Radès",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 202,
          name: "Ligue 1",
          country: "Tunisia",
          logo: "https://media-3.api-sports.io/football/leagues/202.png",
          flag: "https://media-1.api-sports.io/flags/tn.svg",
          season: 2022,
          round: "Championship Round - 13",
        },
        teams: {
          home: {
            id: 980,
            name: "ES Tunis",
            logo: "https://media-2.api-sports.io/football/teams/980.png",
            winner: null,
          },
          away: {
            id: 988,
            name: "Club Africain",
            logo: "https://media-1.api-sports.io/football/teams/988.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1019124,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T19:30:00+04:00",
          timestamp: 1687879800,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1567,
            name: "Stade Taïeb Mhiri",
            city: "Safāqis",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 202,
          name: "Ligue 1",
          country: "Tunisia",
          logo: "https://media-3.api-sports.io/football/leagues/202.png",
          flag: "https://media-1.api-sports.io/flags/tn.svg",
          season: 2022,
          round: "Championship Round - 13",
        },
        teams: {
          home: {
            id: 983,
            name: "CS Sfaxien",
            logo: "https://media-1.api-sports.io/football/teams/983.png",
            winner: null,
          },
          away: {
            id: 1190,
            name: "US Tataouine",
            logo: "https://media-1.api-sports.io/football/teams/1190.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1019125,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T19:30:00+04:00",
          timestamp: 1687879800,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1573,
            name: "Stade de Ben Guerdane",
            city: "Ben Gardane",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 202,
          name: "Ligue 1",
          country: "Tunisia",
          logo: "https://media-3.api-sports.io/football/leagues/202.png",
          flag: "https://media-1.api-sports.io/flags/tn.svg",
          season: 2022,
          round: "Championship Round - 13",
        },
        teams: {
          home: {
            id: 986,
            name: "US Ben Guerdane",
            logo: "https://media-3.api-sports.io/football/teams/986.png",
            winner: null,
          },
          away: {
            id: 990,
            name: "ES Sahel",
            logo: "https://media-2.api-sports.io/football/teams/990.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 1028443,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T22:30:00+04:00",
          timestamp: 1687890600,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 477,
            name: "Cairo International Stadium",
            city: "Cairo",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 233,
          name: "Premier League",
          country: "Egypt",
          logo: "https://media-3.api-sports.io/football/leagues/233.png",
          flag: "https://media-3.api-sports.io/flags/eg.svg",
          season: 2022,
          round: "Regular Season - 32",
        },
        teams: {
          home: {
            id: 1040,
            name: "Zamalek SC",
            logo: "https://media-1.api-sports.io/football/teams/1040.png",
            winner: null,
          },
          away: {
            id: 13819,
            name: "Ghazl El Mehalla",
            logo: "https://media-1.api-sports.io/football/teams/13819.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 996444,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T19:00:00+04:00",
          timestamp: 1687878000,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 618,
            name: "Veritas Stadion",
            city: "Åbo",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 244,
          name: "Veikkausliiga",
          country: "Finland",
          logo: "https://media-1.api-sports.io/football/leagues/244.png",
          flag: "https://media-3.api-sports.io/flags/fi.svg",
          season: 2023,
          round: "Regular Season - 12",
        },
        teams: {
          home: {
            id: 1164,
            name: "Inter Turku",
            logo: "https://media-1.api-sports.io/football/teams/1164.png",
            winner: null,
          },
          away: {
            id: 1163,
            name: "Ilves Tampere",
            logo: "https://media-2.api-sports.io/football/teams/1163.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 996445,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T19:00:00+04:00",
          timestamp: 1687878000,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 12286,
            name: "Väre Areena",
            city: "Kuopio",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 244,
          name: "Veikkausliiga",
          country: "Finland",
          logo: "https://media-1.api-sports.io/football/leagues/244.png",
          flag: "https://media-3.api-sports.io/flags/fi.svg",
          season: 2023,
          round: "Regular Season - 12",
        },
        teams: {
          home: {
            id: 1165,
            name: "KuPS",
            logo: "https://media-3.api-sports.io/football/teams/1165.png",
            winner: null,
          },
          away: {
            id: 587,
            name: "IFK Mariehamn",
            logo: "https://media-2.api-sports.io/football/teams/587.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 996446,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T19:00:00+04:00",
          timestamp: 1687878000,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 629,
            name: "OmaSP Stadion",
            city: "Seinäjoki",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 244,
          name: "Veikkausliiga",
          country: "Finland",
          logo: "https://media-1.api-sports.io/football/leagues/244.png",
          flag: "https://media-3.api-sports.io/flags/fi.svg",
          season: 2023,
          round: "Regular Season - 13",
        },
        teams: {
          home: {
            id: 689,
            name: "SJK",
            logo: "https://media-2.api-sports.io/football/teams/689.png",
            winner: null,
          },
          away: {
            id: 2077,
            name: "AC oulu",
            logo: "https://media-1.api-sports.io/football/teams/2077.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 996447,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T19:00:00+04:00",
          timestamp: 1687878000,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 621,
            name: "Arto Tolsa Areena",
            city: "Kotka",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 244,
          name: "Veikkausliiga",
          country: "Finland",
          logo: "https://media-1.api-sports.io/football/leagues/244.png",
          flag: "https://media-3.api-sports.io/flags/fi.svg",
          season: 2023,
          round: "Regular Season - 13",
        },
        teams: {
          home: {
            id: 2076,
            name: "Kooteepee",
            logo: "https://media-2.api-sports.io/football/teams/2076.png",
            winner: null,
          },
          away: {
            id: 1166,
            name: "FC Lahti",
            logo: "https://media-1.api-sports.io/football/teams/1166.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 996448,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T19:00:00+04:00",
          timestamp: 1687878000,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 614,
            name: "Tehtaan kenttä",
            city: "Valkeakoski",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 244,
          name: "Veikkausliiga",
          country: "Finland",
          logo: "https://media-1.api-sports.io/football/leagues/244.png",
          flag: "https://media-3.api-sports.io/flags/fi.svg",
          season: 2023,
          round: "Regular Season - 13",
        },
        teams: {
          home: {
            id: 2080,
            name: "haka",
            logo: "https://media-3.api-sports.io/football/teams/2080.png",
            winner: null,
          },
          away: {
            id: 649,
            name: "HJK helsinki",
            logo: "https://media-1.api-sports.io/football/teams/649.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 996449,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T19:00:00+04:00",
          timestamp: 1687878000,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 616,
            name: "Tapiolan Urheilupuisto",
            city: "Esbo",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 244,
          name: "Veikkausliiga",
          country: "Finland",
          logo: "https://media-1.api-sports.io/football/leagues/244.png",
          flag: "https://media-3.api-sports.io/flags/fi.svg",
          season: 2023,
          round: "Regular Season - 13",
        },
        teams: {
          home: {
            id: 1169,
            name: "Honka",
            logo: "https://media-3.api-sports.io/football/teams/1169.png",
            winner: null,
          },
          away: {
            id: 650,
            name: "vaasa PS",
            logo: "https://media-1.api-sports.io/football/teams/650.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 1036391,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T01:00:00+04:00",
          timestamp: 1687813200,
          periods: {
            first: 1687813200,
            second: 1687816800,
          },
          venue: {
            id: 1213,
            name: "Estadio Antonio Aranda",
            city: "Ciudad del Este",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 251,
          name: "Division Intermedia",
          country: "Paraguay",
          logo: "https://media-2.api-sports.io/football/leagues/251.png",
          flag: "https://media-2.api-sports.io/flags/py.svg",
          season: 2023,
          round: "Regular Season - 14",
        },
        teams: {
          home: {
            id: 1188,
            name: "3 de Febrero",
            logo: "https://media-1.api-sports.io/football/teams/1188.png",
            winner: true,
          },
          away: {
            id: 3832,
            name: "12 de Octubre",
            logo: "https://media-2.api-sports.io/football/teams/3832.png",
            winner: false,
          },
        },
        goals: {
          home: 3,
          away: 0,
        },
        score: {
          halftime: {
            home: 1,
            away: 0,
          },
          fulltime: {
            home: 3,
            away: 0,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1036392,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T03:15:00+04:00",
          timestamp: 1687821300,
          periods: {
            first: 1687821300,
            second: 1687824900,
          },
          venue: {
            id: 1224,
            name: "Estadio Luís Alfonso Giagni",
            city: "Asunción",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 251,
          name: "Division Intermedia",
          country: "Paraguay",
          logo: "https://media-2.api-sports.io/football/leagues/251.png",
          flag: "https://media-2.api-sports.io/flags/py.svg",
          season: 2023,
          round: "Regular Season - 14",
        },
        teams: {
          home: {
            id: 1177,
            name: "SOL DE America",
            logo: "https://media-2.api-sports.io/football/teams/1177.png",
            winner: true,
          },
          away: {
            id: 2140,
            name: "2 de Mayo",
            logo: "https://media-3.api-sports.io/football/teams/2140.png",
            winner: false,
          },
        },
        goals: {
          home: 2,
          away: 1,
        },
        score: {
          halftime: {
            home: 1,
            away: 1,
          },
          fulltime: {
            home: 2,
            away: 1,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 1023997,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T04:00:00+04:00",
          timestamp: 1687824000,
          periods: {
            first: 1687824000,
            second: 1687827600,
          },
          venue: {
            id: null,
            name: "Stillwater High School",
            city: "Stillwater, Minnesota",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 256,
          name: "USL League Two",
          country: "USA",
          logo: "https://media-3.api-sports.io/football/leagues/256.png",
          flag: "https://media-1.api-sports.io/flags/us.svg",
          season: 2023,
          round: "Central Conference - 11",
        },
        teams: {
          home: {
            id: 18910,
            name: "St. Croix",
            logo: "https://media-2.api-sports.io/football/teams/18910.png",
            winner: false,
          },
          away: {
            id: 4088,
            name: "Thunder Bay Chill",
            logo: "https://media-1.api-sports.io/football/teams/4088.png",
            winner: true,
          },
        },
        goals: {
          home: 0,
          away: 2,
        },
        score: {
          halftime: {
            home: 0,
            away: 2,
          },
          fulltime: {
            home: 0,
            away: 2,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1024150,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T04:00:00+04:00",
          timestamp: 1687824000,
          periods: {
            first: 1687824000,
            second: 1687827600,
          },
          venue: {
            id: 3142,
            name: "Skidelsky Field at City Park Stadium",
            city: "New York",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 256,
          name: "USL League Two",
          country: "USA",
          logo: "https://media-3.api-sports.io/football/leagues/256.png",
          flag: "https://media-1.api-sports.io/flags/us.svg",
          season: 2023,
          round: "Eastern Conference - 16",
        },
        teams: {
          home: {
            id: 4099,
            name: "Westchester Flames",
            logo: "https://media-3.api-sports.io/football/teams/4099.png",
            winner: false,
          },
          away: {
            id: 18897,
            name: "Hudson Valley Hammers",
            logo: "https://media-3.api-sports.io/football/teams/18897.png",
            winner: true,
          },
        },
        goals: {
          home: 2,
          away: 3,
        },
        score: {
          halftime: {
            home: 1,
            away: 0,
          },
          fulltime: {
            home: 2,
            away: 3,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1024590,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T06:30:00+04:00",
          timestamp: 1687833000,
          periods: {
            first: 1687833000,
            second: 1687836600,
          },
          venue: {
            id: null,
            name: "Davis Legacy Soccer Club Complex",
            city: "Webster, California",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 256,
          name: "USL League Two",
          country: "USA",
          logo: "https://media-3.api-sports.io/football/leagues/256.png",
          flag: "https://media-1.api-sports.io/flags/us.svg",
          season: 2023,
          round: "Western Conference - 9",
        },
        teams: {
          home: {
            id: 18893,
            name: "Davis Legacy",
            logo: "https://media-1.api-sports.io/football/teams/18893.png",
            winner: true,
          },
          away: {
            id: 4079,
            name: "San Francisco City",
            logo: "https://media-2.api-sports.io/football/teams/4079.png",
            winner: false,
          },
        },
        goals: {
          home: 2,
          away: 1,
        },
        score: {
          halftime: {
            home: 0,
            away: 1,
          },
          fulltime: {
            home: 2,
            away: 1,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 982748,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T16:00:00+04:00",
          timestamp: 1687867200,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 18835,
            name: "Gusii Stadium",
            city: "Kisii",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 277,
          name: "Super League",
          country: "Kenya",
          logo: "https://media-2.api-sports.io/football/leagues/277.png",
          flag: "https://media-2.api-sports.io/flags/ke.svg",
          season: 2022,
          round: "Regular Season - 36",
        },
        teams: {
          home: {
            id: 19489,
            name: "Shabana",
            logo: "https://media-2.api-sports.io/football/teams/19489.png",
            winner: null,
          },
          away: {
            id: 19482,
            name: "MCF",
            logo: "https://media-3.api-sports.io/football/teams/19482.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 1035188,
          referee: "Daniel Ureta, Peru",
          timezone: "Asia/Yerevan",
          date: "2023-06-27T00:30:00+04:00",
          timestamp: 1687811400,
          periods: {
            first: 1687811400,
            second: 1687815000,
          },
          venue: {
            id: 1233,
            name: "Estadio Inca Garcilaso de la Vega",
            city: "Cusco",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 281,
          name: "Primera División",
          country: "Peru",
          logo: "https://media-1.api-sports.io/football/leagues/281.png",
          flag: "https://media-2.api-sports.io/flags/pe.svg",
          season: 2023,
          round: "Clausura - 1",
        },
        teams: {
          home: {
            id: 10013,
            name: "Cusco",
            logo: "https://media-1.api-sports.io/football/teams/10013.png",
            winner: true,
          },
          away: {
            id: 2539,
            name: "UTC",
            logo: "https://media-1.api-sports.io/football/teams/2539.png",
            winner: false,
          },
        },
        goals: {
          home: 2,
          away: 1,
        },
        score: {
          halftime: {
            home: 0,
            away: 0,
          },
          fulltime: {
            home: 2,
            away: 1,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 1019072,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T00:00:00+04:00",
          timestamp: 1687809600,
          periods: {
            first: 1687809600,
            second: 1687813200,
          },
          venue: {
            id: null,
            name: "Estadio 12 de Noviembre",
            city: "San Juan de Miraflores",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 282,
          name: "Segunda División",
          country: "Peru",
          logo: "https://media-2.api-sports.io/football/leagues/282.png",
          flag: "https://media-2.api-sports.io/flags/pe.svg",
          season: 2023,
          round: "Regular Season - 12",
        },
        teams: {
          home: {
            id: 4226,
            name: "Santos",
            logo: "https://media-3.api-sports.io/football/teams/4226.png",
            winner: true,
          },
          away: {
            id: 2542,
            name: "Ayacucho FC",
            logo: "https://media-2.api-sports.io/football/teams/2542.png",
            winner: false,
          },
        },
        goals: {
          home: 4,
          away: 1,
        },
        score: {
          halftime: {
            home: 1,
            away: 0,
          },
          fulltime: {
            home: 4,
            away: 1,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1019078,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T00:30:00+04:00",
          timestamp: 1687811400,
          periods: {
            first: 1687811400,
            second: 1687815000,
          },
          venue: {
            id: 1810,
            name: "Estadio Juan Maldonado Gamarra",
            city: "Cutervo",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 282,
          name: "Segunda División",
          country: "Peru",
          logo: "https://media-2.api-sports.io/football/leagues/282.png",
          flag: "https://media-2.api-sports.io/flags/pe.svg",
          season: 2023,
          round: "Regular Season - 12",
        },
        teams: {
          home: {
            id: 2558,
            name: "Comerciantes Unidos",
            logo: "https://media-3.api-sports.io/football/teams/2558.png",
            winner: true,
          },
          away: {
            id: 2556,
            name: "Molinos El Pirata",
            logo: "https://media-3.api-sports.io/football/teams/2556.png",
            winner: false,
          },
        },
        goals: {
          home: 5,
          away: 0,
        },
        score: {
          halftime: {
            home: 1,
            away: 0,
          },
          fulltime: {
            home: 5,
            away: 0,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 1001285,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T19:00:00+04:00",
          timestamp: 1687878000,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 2334,
            name: "Kuressaare linnastaadion",
            city: "Kuressaare",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 329,
          name: "Meistriliiga",
          country: "Estonia",
          logo: "https://media-3.api-sports.io/football/leagues/329.png",
          flag: "https://media-3.api-sports.io/flags/ee.svg",
          season: 2023,
          round: "Regular Season - 18",
        },
        teams: {
          home: {
            id: 3526,
            name: "Kuressaare",
            logo: "https://media-1.api-sports.io/football/teams/3526.png",
            winner: null,
          },
          away: {
            id: 2274,
            name: "Trans Narva",
            logo: "https://media-1.api-sports.io/football/teams/2274.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1001286,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T20:00:00+04:00",
          timestamp: 1687881600,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 2338,
            name: "Tamme staadion",
            city: "Tartu",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 329,
          name: "Meistriliiga",
          country: "Estonia",
          logo: "https://media-3.api-sports.io/football/leagues/329.png",
          flag: "https://media-3.api-sports.io/flags/ee.svg",
          season: 2023,
          round: "Regular Season - 18",
        },
        teams: {
          home: {
            id: 3530,
            name: "Tammeka",
            logo: "https://media-2.api-sports.io/football/teams/3530.png",
            winner: null,
          },
          away: {
            id: 3525,
            name: "Vaprus",
            logo: "https://media-1.api-sports.io/football/teams/3525.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1001287,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T21:00:00+04:00",
          timestamp: 1687885200,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 2336,
            name: "Paide linnastaadion",
            city: "Paide",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 329,
          name: "Meistriliiga",
          country: "Estonia",
          logo: "https://media-3.api-sports.io/football/leagues/329.png",
          flag: "https://media-3.api-sports.io/flags/ee.svg",
          season: 2023,
          round: "Regular Season - 18",
        },
        teams: {
          home: {
            id: 3528,
            name: "Paide",
            logo: "https://media-1.api-sports.io/football/teams/3528.png",
            winner: null,
          },
          away: {
            id: 662,
            name: "Kalju Nomme",
            logo: "https://media-1.api-sports.io/football/teams/662.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 1001061,
          referee: "Á. Flores",
          timezone: "Asia/Yerevan",
          date: "2023-06-27T03:00:00+04:00",
          timestamp: 1687820400,
          periods: {
            first: 1687820400,
            second: 1687824000,
          },
          venue: {
            id: 2655,
            name: "Estadio Olímpico Patria",
            city: "Sucre",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 344,
          name: "Primera División",
          country: "Bolivia",
          logo: "https://media-3.api-sports.io/football/leagues/344.png",
          flag: "https://media-3.api-sports.io/flags/bo.svg",
          season: 2023,
          round: "Regular Season - 17",
        },
        teams: {
          home: {
            id: 15702,
            name: "Independiente Petrolero",
            logo: "https://media-1.api-sports.io/football/teams/15702.png",
            winner: true,
          },
          away: {
            id: 3704,
            name: "Guabirá",
            logo: "https://media-2.api-sports.io/football/teams/3704.png",
            winner: false,
          },
        },
        goals: {
          home: 1,
          away: 0,
        },
        score: {
          halftime: {
            home: 1,
            away: 0,
          },
          fulltime: {
            home: 1,
            away: 0,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 1011657,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T19:00:00+04:00",
          timestamp: 1687878000,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 19580,
            name: "Prienų stadionas",
            city: "Prienai",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 361,
          name: "1 Lyga",
          country: "Lithuania",
          logo: "https://media-2.api-sports.io/football/leagues/361.png",
          flag: "https://media-1.api-sports.io/flags/lt.svg",
          season: 2023,
          round: "Regular Season - 14",
        },
        teams: {
          home: {
            id: 11891,
            name: "Šilas",
            logo: "https://media-3.api-sports.io/football/teams/11891.png",
            winner: null,
          },
          away: {
            id: 3868,
            name: "Trakai II",
            logo: "https://media-2.api-sports.io/football/teams/3868.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 1027165,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T20:00:00+04:00",
          timestamp: 1687881600,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 2612,
            name: "S. Dariaus ir S. Girėno stadionas",
            city: "Kaunas",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 362,
          name: "A Lyga",
          country: "Lithuania",
          logo: "https://media-2.api-sports.io/football/leagues/362.png",
          flag: "https://media-1.api-sports.io/flags/lt.svg",
          season: 2023,
          round: "Regular Season - 22",
        },
        teams: {
          home: {
            id: 3872,
            name: "Kauno Žalgiris",
            logo: "https://media-3.api-sports.io/football/teams/3872.png",
            winner: null,
          },
          away: {
            id: 586,
            name: "FK Zalgiris Vilnius",
            logo: "https://media-1.api-sports.io/football/teams/586.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 997921,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T15:45:00+04:00",
          timestamp: 1687866300,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: null,
            name: "Town Square at Our Tampines Hub",
            city: "Singapore",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 368,
          name: "Premier League",
          country: "Singapore",
          logo: "https://media-1.api-sports.io/football/leagues/368.png",
          flag: "https://media-1.api-sports.io/flags/sg.svg",
          season: 2023,
          round: "Regular Season - 7",
        },
        teams: {
          home: {
            id: 4206,
            name: "Tampines Rovers",
            logo: "https://media-3.api-sports.io/football/teams/4206.png",
            winner: null,
          },
          away: {
            id: 4200,
            name: "Albirex Niigata S",
            logo: "https://media-3.api-sports.io/football/teams/4200.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 1023370,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T16:30:00+04:00",
          timestamp: 1687869000,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: null,
            name: "Stadion Beş-Kungey",
            city: "Besh-Kyungey",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 569,
          name: "Premier League",
          country: "Kyrgyzstan",
          logo: "https://media-1.api-sports.io/football/leagues/569.png",
          flag: "https://media-3.api-sports.io/flags/kg.svg",
          season: 2023,
          round: "Regular Season - 14",
        },
        teams: {
          home: {
            id: 18731,
            name: "Talant",
            logo: "https://media-1.api-sports.io/football/teams/18731.png",
            winner: null,
          },
          away: {
            id: 21167,
            name: "Muras United",
            logo: "https://media-2.api-sports.io/football/teams/21167.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1023369,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T19:00:00+04:00",
          timestamp: 1687878000,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1021,
            name: "Stadion im. Dolena Omurzakova",
            city: "Bishkek",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 569,
          name: "Premier League",
          country: "Kyrgyzstan",
          logo: "https://media-1.api-sports.io/football/leagues/569.png",
          flag: "https://media-3.api-sports.io/flags/kg.svg",
          season: 2023,
          round: "Regular Season - 14",
        },
        teams: {
          home: {
            id: 12236,
            name: "Ilbirs",
            logo: "https://media-2.api-sports.io/football/teams/12236.png",
            winner: null,
          },
          away: {
            id: 21168,
            name: "OshMU Aldier",
            logo: "https://media-2.api-sports.io/football/teams/21168.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 1003683,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T13:00:00+04:00",
          timestamp: 1687856400,
          periods: {
            first: 1687856400,
            second: 1687860000,
          },
          venue: {
            id: 5712,
            name: "Yangon United Sport Complex",
            city: "Yangon",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 588,
          name: "National League",
          country: "Myanmar",
          logo: "https://media-1.api-sports.io/football/leagues/588.png",
          flag: "https://media-2.api-sports.io/flags/mm.svg",
          season: 2023,
          round: "Regular Season - 10",
        },
        teams: {
          home: {
            id: 8013,
            name: "Yangon United",
            logo: "https://media-1.api-sports.io/football/teams/8013.png",
            winner: true,
          },
          away: {
            id: 12525,
            name: "Hantharwady United",
            logo: "https://media-1.api-sports.io/football/teams/12525.png",
            winner: false,
          },
        },
        goals: {
          home: 2,
          away: 0,
        },
        score: {
          halftime: {
            home: 1,
            away: 0,
          },
          fulltime: {
            home: 2,
            away: 0,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1003684,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T13:30:00+04:00",
          timestamp: 1687858200,
          periods: {
            first: 1687858200,
            second: 1687861800,
          },
          venue: {
            id: 19697,
            name: "Thuwunna Stadium",
            city: "Yangon",
          },
          status: {
            long: "Second Half",
            short: "2H",
            elapsed: 88,
          },
        },
        league: {
          id: 588,
          name: "National League",
          country: "Myanmar",
          logo: "https://media-1.api-sports.io/football/leagues/588.png",
          flag: "https://media-2.api-sports.io/flags/mm.svg",
          season: 2023,
          round: "Regular Season - 10",
        },
        teams: {
          home: {
            id: 12523,
            name: "Ayeyawady United",
            logo: "https://media-1.api-sports.io/football/teams/12523.png",
            winner: true,
          },
          away: {
            id: 20967,
            name: "Kachin United",
            logo: "https://media-3.api-sports.io/football/teams/20967.png",
            winner: false,
          },
        },
        goals: {
          home: 4,
          away: 3,
        },
        score: {
          halftime: {
            home: 3,
            away: 2,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 993595,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T21:30:00+04:00",
          timestamp: 1687887000,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 7991,
            name: "Svedjevallen",
            city: "Ytterhogdal",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 594,
          name: "Division 2 - Norrland",
          country: "Sweden",
          logo: "https://media-3.api-sports.io/football/leagues/594.png",
          flag: "https://media-3.api-sports.io/flags/se.svg",
          season: 2023,
          round: "Norrland - 13",
        },
        teams: {
          home: {
            id: 12594,
            name: "Ytterhogdal",
            logo: "https://media-3.api-sports.io/football/teams/12594.png",
            winner: null,
          },
          away: {
            id: 6681,
            name: "IFK Östersund",
            logo: "https://media-3.api-sports.io/football/teams/6681.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 993419,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T22:00:00+04:00",
          timestamp: 1687888800,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: null,
            name: "Lindevi IP",
            city: "Lindome",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 596,
          name: "Division 2 - Västra Götaland",
          country: "Sweden",
          logo: "https://media-2.api-sports.io/football/leagues/596.png",
          flag: "https://media-2.api-sports.io/flags/se.svg",
          season: 2023,
          round: "Västra Götaland - 14",
        },
        teams: {
          home: {
            id: 6686,
            name: "Lindome",
            logo: "https://media-1.api-sports.io/football/teams/6686.png",
            winner: null,
          },
          away: {
            id: 12658,
            name: "Nässjö",
            logo: "https://media-2.api-sports.io/football/teams/12658.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 1017901,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T22:00:00+04:00",
          timestamp: 1687888800,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 272,
            name: "Estádio Adauto Moraes",
            city: "Juazeiro, Bahia",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 613,
          name: "Baiano - 2",
          country: "Brazil",
          logo: "https://media-2.api-sports.io/football/leagues/613.png",
          flag: "https://media-3.api-sports.io/flags/br.svg",
          season: 2023,
          round: "Regular Season - 7",
        },
        teams: {
          home: {
            id: 18833,
            name: "Juazeiro BA",
            logo: "https://media-1.api-sports.io/football/teams/18833.png",
            winner: null,
          },
          away: {
            id: 12934,
            name: "UNIRB",
            logo: "https://media-1.api-sports.io/football/teams/12934.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 1042627,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T04:00:00+04:00",
          timestamp: 1687824000,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: null,
            name: "TBC",
            city: "TBC",
          },
          status: {
            long: "Time to be defined",
            short: "TBD",
            elapsed: null,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 3",
        },
        teams: {
          home: {
            id: 6736,
            name: "Dundonald Bluebell",
            logo: "https://media-1.api-sports.io/football/teams/6736.png",
            winner: null,
          },
          away: {
            id: 4669,
            name: "Stirling Albion",
            logo: "https://media-1.api-sports.io/football/teams/4669.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1030357,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T13:00:00+04:00",
          timestamp: 1687856400,
          periods: {
            first: 1687856400,
            second: 1687860000,
          },
          venue: {
            id: null,
            name: "Boisko KS Kolorado Wola Chorzelowska",
            city: "Wola Chorzelowska",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 3",
        },
        teams: {
          home: {
            id: 3493,
            name: "Stal Mielec",
            logo: "https://media-3.api-sports.io/football/teams/3493.png",
            winner: true,
          },
          away: {
            id: 3498,
            name: "ŁKS Łódź",
            logo: "https://media-3.api-sports.io/football/teams/3498.png",
            winner: false,
          },
        },
        goals: {
          home: 2,
          away: 1,
        },
        score: {
          halftime: {
            home: 2,
            away: 1,
          },
          fulltime: {
            home: 2,
            away: 1,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1030355,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T13:30:00+04:00",
          timestamp: 1687858200,
          periods: {
            first: 1687858200,
            second: 1687861800,
          },
          venue: {
            id: null,
            name: "TBC",
            city: "TBC",
          },
          status: {
            long: "Second Half",
            short: "2H",
            elapsed: 80,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 3",
        },
        teams: {
          home: {
            id: 3491,
            name: "Raków Częstochowa",
            logo: "https://media-2.api-sports.io/football/teams/3491.png",
            winner: true,
          },
          away: {
            id: 3490,
            name: "Puszcza Niepołomice",
            logo: "https://media-1.api-sports.io/football/teams/3490.png",
            winner: false,
          },
        },
        goals: {
          home: 3,
          away: 0,
        },
        score: {
          halftime: {
            home: 0,
            away: 0,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1036561,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T14:00:00+04:00",
          timestamp: 1687860000,
          periods: {
            first: 1687860000,
            second: 1687863600,
          },
          venue: {
            id: null,
            name: "TBC",
            city: "TBC",
          },
          status: {
            long: "Second Half",
            short: "2H",
            elapsed: 53,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 3",
        },
        teams: {
          home: {
            id: 6801,
            name: "KAMAZ",
            logo: "https://media-1.api-sports.io/football/teams/6801.png",
            winner: false,
          },
          away: {
            id: 1076,
            name: "Amkar",
            logo: "https://media-2.api-sports.io/football/teams/1076.png",
            winner: true,
          },
        },
        goals: {
          home: 1,
          away: 3,
        },
        score: {
          halftime: {
            home: 1,
            away: 2,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1036164,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T15:00:00+04:00",
          timestamp: 1687863600,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: null,
            name: "TBC",
            city: "TBC",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 3",
        },
        teams: {
          home: {
            id: 2644,
            name: "Radnicki 1923",
            logo: "https://media-3.api-sports.io/football/teams/2644.png",
            winner: null,
          },
          away: {
            id: 3362,
            name: "Zvijezda 09",
            logo: "https://media-2.api-sports.io/football/teams/3362.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1036562,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T16:00:00+04:00",
          timestamp: 1687867200,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: null,
            name: "TBC",
            city: "TBC",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 3",
        },
        teams: {
          home: {
            id: 6836,
            name: "Zenit Izhevsk",
            logo: "https://media-1.api-sports.io/football/teams/6836.png",
            winner: null,
          },
          away: {
            id: 6801,
            name: "KAMAZ",
            logo: "https://media-3.api-sports.io/football/teams/6801.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1030356,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T18:30:00+04:00",
          timestamp: 1687876200,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 5903,
            name: "Murinselstadion",
            city: "Bruck an der Mur",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 3",
        },
        teams: {
          home: {
            id: 656,
            name: "Slovan Bratislava",
            logo: "https://media-3.api-sports.io/football/teams/656.png",
            winner: null,
          },
          away: {
            id: 677,
            name: "Olimpija Ljubljana",
            logo: "https://media-1.api-sports.io/football/teams/677.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1036678,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T18:30:00+04:00",
          timestamp: 1687876200,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: null,
            name: "TBC",
            city: "TBC",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 3",
        },
        teams: {
          home: {
            id: 6829,
            name: "Strogino",
            logo: "https://media-1.api-sports.io/football/teams/6829.png",
            winner: null,
          },
          away: {
            id: 2001,
            name: "FK Neftekhimik",
            logo: "https://media-1.api-sports.io/football/teams/2001.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1030709,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T19:00:00+04:00",
          timestamp: 1687878000,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: null,
            name: "TBC",
            city: "TBC",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 3",
        },
        teams: {
          home: {
            id: 3719,
            name: "Slovácko",
            logo: "https://media-3.api-sports.io/football/teams/3719.png",
            winner: null,
          },
          away: {
            id: 3548,
            name: "Podbrezová",
            logo: "https://media-3.api-sports.io/football/teams/3548.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1036415,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T19:00:00+04:00",
          timestamp: 1687878000,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: null,
            name: "TBC",
            city: "TBC",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 3",
        },
        teams: {
          home: {
            id: 851,
            name: "Cherno More Varna",
            logo: "https://media-3.api-sports.io/football/teams/851.png",
            winner: null,
          },
          away: {
            id: 1120,
            name: "Spartak Trnava",
            logo: "https://media-2.api-sports.io/football/teams/1120.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1036679,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T19:00:00+04:00",
          timestamp: 1687878000,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: null,
            name: "Stadion Georgi Benkovski",
            city: "Teteven",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 3",
        },
        teams: {
          home: {
            id: 851,
            name: "Cherno More Varna",
            logo: "https://media-1.api-sports.io/football/teams/851.png",
            winner: null,
          },
          away: {
            id: 855,
            name: "Etar Veliko Tarnovo",
            logo: "https://media-3.api-sports.io/football/teams/855.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1040938,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T19:30:00+04:00",
          timestamp: 1687879800,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: null,
            name: "Sportplatz Mönichkirchen FC",
            city: "Feldbauern",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 3",
        },
        teams: {
          home: {
            id: 1401,
            name: "SV Kapfenberg",
            logo: "https://media-2.api-sports.io/football/teams/1401.png",
            winner: null,
          },
          away: {
            id: 6886,
            name: "Oţelul",
            logo: "https://media-1.api-sports.io/football/teams/6886.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 992225,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T20:00:00+04:00",
          timestamp: 1687881600,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1519,
            name: "Strandvallen",
            city: "Sölvesborg",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 3",
        },
        teams: {
          home: {
            id: 2240,
            name: "Mjallby AIF",
            logo: "https://media-1.api-sports.io/football/teams/2240.png",
            winner: null,
          },
          away: {
            id: 811,
            name: "Helsingborg",
            logo: "https://media-2.api-sports.io/football/teams/811.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1036414,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T20:00:00+04:00",
          timestamp: 1687881600,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: null,
            name: "TBC",
            city: "TBC",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 3",
        },
        teams: {
          home: {
            id: 853,
            name: "CSKA Sofia",
            logo: "https://media-1.api-sports.io/football/teams/853.png",
            winner: null,
          },
          away: {
            id: 2581,
            name: "FC Botosani",
            logo: "https://media-2.api-sports.io/football/teams/2581.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1040939,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T20:00:00+04:00",
          timestamp: 1687881600,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: null,
            name: "TBC",
            city: "TBC",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 3",
        },
        teams: {
          home: {
            id: 651,
            name: "Ferencvarosi TC",
            logo: "https://media-2.api-sports.io/football/teams/651.png",
            winner: null,
          },
          away: {
            id: 556,
            name: "Qarabag",
            logo: "https://media-3.api-sports.io/football/teams/556.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1036894,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T20:30:00+04:00",
          timestamp: 1687883400,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: null,
            name: null,
            city: null,
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 5",
        },
        teams: {
          home: {
            id: 12751,
            name: "Deisenhofen",
            logo: "https://media-3.api-sports.io/football/teams/12751.png",
            winner: null,
          },
          away: {
            id: 12836,
            name: "Pullach",
            logo: "https://media-1.api-sports.io/football/teams/12836.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1042564,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T20:30:00+04:00",
          timestamp: 1687883400,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: null,
            name: null,
            city: null,
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 5",
        },
        teams: {
          home: {
            id: 5004,
            name: "Krems",
            logo: "https://media-2.api-sports.io/football/teams/5004.png",
            winner: null,
          },
          away: {
            id: 4961,
            name: "Traiskirchen",
            logo: "https://media-3.api-sports.io/football/teams/4961.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1042708,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T21:00:00+04:00",
          timestamp: 1687885200,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: null,
            name: null,
            city: null,
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 3",
        },
        teams: {
          home: {
            id: 8326,
            name: "Leoben",
            logo: "https://media-1.api-sports.io/football/teams/8326.png",
            winner: null,
          },
          away: {
            id: 21533,
            name: "Tillmitsch",
            logo: "https://media-1.api-sports.io/football/teams/21533.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1036165,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T21:30:00+04:00",
          timestamp: 1687887000,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 2900,
            name: "Sportpark Groot Scholtenhagen",
            city: "Haaksbergen",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 3",
        },
        teams: {
          home: {
            id: 1281,
            name: "Hsc 21",
            logo: "https://media-2.api-sports.io/football/teams/1281.png",
            winner: null,
          },
          away: {
            id: 256,
            name: "Motherwell",
            logo: "https://media-1.api-sports.io/football/teams/256.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1042550,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T21:30:00+04:00",
          timestamp: 1687887000,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: null,
            name: null,
            city: null,
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 4",
        },
        teams: {
          home: {
            id: 9362,
            name: "FC Gießen",
            logo: "https://media-3.api-sports.io/football/teams/9362.png",
            winner: null,
          },
          away: {
            id: 12773,
            name: "Gonsenheim",
            logo: "https://media-1.api-sports.io/football/teams/12773.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1042712,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T22:15:00+04:00",
          timestamp: 1687889700,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: null,
            name: null,
            city: null,
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 3",
        },
        teams: {
          home: {
            id: 6118,
            name: "Crumlin United",
            logo: "https://media-1.api-sports.io/football/teams/6118.png",
            winner: null,
          },
          away: {
            id: 2275,
            name: "Glenavon FC",
            logo: "https://media-3.api-sports.io/football/teams/2275.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1030358,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T22:30:00+04:00",
          timestamp: 1687890600,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 4030,
            name: "Bangor Fuels Arena",
            city: "Bangor",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 3",
        },
        teams: {
          home: {
            id: 11112,
            name: "Bangor",
            logo: "https://media-2.api-sports.io/football/teams/11112.png",
            winner: null,
          },
          away: {
            id: 5354,
            name: "Larne",
            logo: "https://media-3.api-sports.io/football/teams/5354.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1031049,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T22:30:00+04:00",
          timestamp: 1687890600,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1384,
            name: "Indodrill Stadium",
            city: "Alloa",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 3",
        },
        teams: {
          home: {
            id: 1391,
            name: "Alloa Athletic",
            logo: "https://media-3.api-sports.io/football/teams/1391.png",
            winner: null,
          },
          away: {
            id: 7436,
            name: "Cumbernauld Colts",
            logo: "https://media-1.api-sports.io/football/teams/7436.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1035166,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T22:30:00+04:00",
          timestamp: 1687890600,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: null,
            name: "TBC",
            city: "TBC",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 3",
        },
        teams: {
          home: {
            id: 21452,
            name: "Inverkeithing Hillfield",
            logo: "https://media-2.api-sports.io/football/teams/21452.png",
            winner: null,
          },
          away: {
            id: 6764,
            name: "East Fife",
            logo: "https://media-2.api-sports.io/football/teams/6764.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1030359,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T22:45:00+04:00",
          timestamp: 1687891500,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 3246,
            name: "Links Park",
            city: "Montrose",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 3",
        },
        teams: {
          home: {
            id: 4251,
            name: "Montrose",
            logo: "https://media-3.api-sports.io/football/teams/4251.png",
            winner: null,
          },
          away: {
            id: 1385,
            name: "Raith Rovers",
            logo: "https://media-3.api-sports.io/football/teams/1385.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1037344,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T22:45:00+04:00",
          timestamp: 1687891500,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: null,
            name: "Gleaner Arena",
            city: "Elgin",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 3",
        },
        teams: {
          home: {
            id: 6767,
            name: "Elgin City",
            logo: "https://media-3.api-sports.io/football/teams/6767.png",
            winner: null,
          },
          away: {
            id: 7449,
            name: "Rothes",
            logo: "https://media-3.api-sports.io/football/teams/7449.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1037622,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T22:45:00+04:00",
          timestamp: 1687891500,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 5415,
            name: "Civil Service Sports Ground",
            city: "Edinburgh",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 3",
        },
        teams: {
          home: {
            id: 7434,
            name: "Civil Service Strollers",
            logo: "https://media-2.api-sports.io/football/teams/7434.png",
            winner: null,
          },
          away: {
            id: 1389,
            name: "Falkirk",
            logo: "https://media-2.api-sports.io/football/teams/1389.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1042565,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T22:45:00+04:00",
          timestamp: 1687891500,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 4950,
            name: "New Central Park",
            city: "Kelty",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 3",
        },
        teams: {
          home: {
            id: 6773,
            name: "Kelty Hearts",
            logo: "https://media-2.api-sports.io/football/teams/6773.png",
            winner: null,
          },
          away: {
            id: 7443,
            name: "Gala Fairydean Rovers",
            logo: "https://media-1.api-sports.io/football/teams/7443.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1031553,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T23:00:00+04:00",
          timestamp: 1687892400,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 4951,
            name: "Balmoor Stadium",
            city: "Peterhead",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 3",
        },
        teams: {
          home: {
            id: 6777,
            name: "Peterhead",
            logo: "https://media-3.api-sports.io/football/teams/6777.png",
            winner: null,
          },
          away: {
            id: 7432,
            name: "Buckie Thistle",
            logo: "https://media-1.api-sports.io/football/teams/7432.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 1031959,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T21:00:00+04:00",
          timestamp: 1687885200,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 5153,
            name: "Ullern kunstgress",
            city: "Oslo",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 774,
          name: "3. Division - Girone 1",
          country: "Norway",
          logo: "https://media-2.api-sports.io/football/leagues/774.png",
          flag: "https://media-2.api-sports.io/flags/no.svg",
          season: 2023,
          round: "Group 1 - 11",
        },
        teams: {
          home: {
            id: 21416,
            name: "Ullern II",
            logo: "https://media-3.api-sports.io/football/teams/21416.png",
            winner: null,
          },
          away: {
            id: 6991,
            name: "Gjelleråsen",
            logo: "https://media-3.api-sports.io/football/teams/6991.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 1017648,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T22:00:00+04:00",
          timestamp: 1687888800,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 8290,
            name: "Estádio Lourival Gomes de Almeida",
            city: "Saquarema, Rio de Janeiro",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 851,
          name: "Carioca A2",
          country: "Brazil",
          logo: "https://media-3.api-sports.io/football/leagues/851.png",
          flag: "https://media-2.api-sports.io/flags/br.svg",
          season: 2023,
          round: "1st Phase - 7",
        },
        teams: {
          home: {
            id: 20006,
            name: "CEAC / Araruama",
            logo: "https://media-3.api-sports.io/football/teams/20006.png",
            winner: null,
          },
          away: {
            id: 13104,
            name: "América RJ",
            logo: "https://media-2.api-sports.io/football/teams/13104.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 997029,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T18:00:00+04:00",
          timestamp: 1687874400,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: null,
            name: null,
            city: null,
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 906,
          name: "Reserve League",
          country: "Argentina",
          logo: "https://media-1.api-sports.io/football/leagues/906.png",
          flag: "https://media-1.api-sports.io/flags/ar.svg",
          season: 2023,
          round: "1st Phase - 22",
        },
        teams: {
          home: {
            id: 18694,
            name: "Racing Club Res.",
            logo: "https://media-2.api-sports.io/football/teams/18694.png",
            winner: null,
          },
          away: {
            id: 18683,
            name: "Colón Res.",
            logo: "https://media-3.api-sports.io/football/teams/18683.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 997034,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T18:00:00+04:00",
          timestamp: 1687874400,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: null,
            name: null,
            city: null,
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 906,
          name: "Reserve League",
          country: "Argentina",
          logo: "https://media-1.api-sports.io/football/leagues/906.png",
          flag: "https://media-1.api-sports.io/flags/ar.svg",
          season: 2023,
          round: "1st Phase - 22",
        },
        teams: {
          home: {
            id: 18660,
            name: "Arsenal Res.",
            logo: "https://media-3.api-sports.io/football/teams/18660.png",
            winner: null,
          },
          away: {
            id: 18702,
            name: "Vélez Sársfield Res.",
            logo: "https://media-2.api-sports.io/football/teams/18702.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 997037,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T18:00:00+04:00",
          timestamp: 1687874400,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: null,
            name: null,
            city: null,
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 906,
          name: "Reserve League",
          country: "Argentina",
          logo: "https://media-1.api-sports.io/football/leagues/906.png",
          flag: "https://media-1.api-sports.io/flags/ar.svg",
          season: 2023,
          round: "1st Phase - 22",
        },
        teams: {
          home: {
            id: 18698,
            name: "Sarmiento Res.",
            logo: "https://media-1.api-sports.io/football/teams/18698.png",
            winner: null,
          },
          away: {
            id: 18681,
            name: "Boca Juniors Res.",
            logo: "https://media-3.api-sports.io/football/teams/18681.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 997038,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T18:00:00+04:00",
          timestamp: 1687874400,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: null,
            name: null,
            city: null,
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 906,
          name: "Reserve League",
          country: "Argentina",
          logo: "https://media-1.api-sports.io/football/leagues/906.png",
          flag: "https://media-1.api-sports.io/flags/ar.svg",
          season: 2023,
          round: "1st Phase - 22",
        },
        teams: {
          home: {
            id: 18701,
            name: "Unión Santa Fe Res.",
            logo: "https://media-2.api-sports.io/football/teams/18701.png",
            winner: null,
          },
          away: {
            id: 18678,
            name: "Atlético Tucumán Res.",
            logo: "https://media-1.api-sports.io/football/teams/18678.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 997040,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T18:00:00+04:00",
          timestamp: 1687874400,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: null,
            name: null,
            city: null,
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 906,
          name: "Reserve League",
          country: "Argentina",
          logo: "https://media-1.api-sports.io/football/leagues/906.png",
          flag: "https://media-1.api-sports.io/flags/ar.svg",
          season: 2023,
          round: "1st Phase - 22",
        },
        teams: {
          home: {
            id: 18686,
            name: "Gimnasia La Plata Res.",
            logo: "https://media-1.api-sports.io/football/teams/18686.png",
            winner: null,
          },
          away: {
            id: 18691,
            name: "Newell's Old Boys Res.",
            logo: "https://media-3.api-sports.io/football/teams/18691.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 1023616,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T12:00:00+04:00",
          timestamp: 1687852800,
          periods: {
            first: 1687852800,
            second: 1687856400,
          },
          venue: {
            id: 19659,
            name: "Loudi Sports Center",
            city: "Loudi",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 929,
          name: "League Two",
          country: "China",
          logo: "https://media-3.api-sports.io/football/leagues/929.png",
          flag: "https://media-2.api-sports.io/flags/cn.svg",
          season: 2023,
          round: "Regular Season - 8",
        },
        teams: {
          home: {
            id: 1438,
            name: "Hunan Billows FC",
            logo: "https://media-2.api-sports.io/football/teams/1438.png",
            winner: false,
          },
          away: {
            id: 21265,
            name: "Yunnan Yukun",
            logo: "https://media-1.api-sports.io/football/teams/21265.png",
            winner: true,
          },
        },
        goals: {
          home: 2,
          away: 5,
        },
        score: {
          halftime: {
            home: 2,
            away: 4,
          },
          fulltime: {
            home: 2,
            away: 5,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1023617,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T12:00:00+04:00",
          timestamp: 1687852800,
          periods: {
            first: 1687852800,
            second: 1687856400,
          },
          venue: {
            id: 19661,
            name: "Jinjiang Football Training Center Stadium",
            city: "Jinjiang",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 929,
          name: "League Two",
          country: "China",
          logo: "https://media-3.api-sports.io/football/leagues/929.png",
          flag: "https://media-2.api-sports.io/flags/cn.svg",
          season: 2023,
          round: "Regular Season - 8",
        },
        teams: {
          home: {
            id: 17266,
            name: "Quanzhou Yassin",
            logo: "https://media-2.api-sports.io/football/teams/17266.png",
            winner: false,
          },
          away: {
            id: 21262,
            name: "Chongqing Tongliang Long",
            logo: "https://media-2.api-sports.io/football/teams/21262.png",
            winner: true,
          },
        },
        goals: {
          home: 1,
          away: 3,
        },
        score: {
          halftime: {
            home: 1,
            away: 2,
          },
          fulltime: {
            home: 1,
            away: 3,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
    [
      {
        fixture: {
          id: 1041108,
          referee: null,
          timezone: "Asia/Yerevan",
          date: "2023-06-27T21:00:00+04:00",
          timestamp: 1687885200,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1103,
            name: "Stade Prince Moulay Abdallah",
            city: "Rabat",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 1015,
          name: "CAF U23 Cup of Nations",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/1015.png",
          flag: null,
          season: 2023,
          round: "Group Stage - 2",
        },
        teams: {
          home: {
            id: 20543,
            name: "Congo U23",
            logo: "https://media-3.api-sports.io/football/teams/20543.png",
            winner: null,
          },
          away: {
            id: 20547,
            name: "Guinea U23",
            logo: "https://media-3.api-sports.io/football/teams/20547.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
  ],
  isLoading: false,
  error: null,
}

export const fetchContent = createAsyncThunk("live/fetchContent", async () => {
  const response = await axios.request(
    options("fixtures", { date: "2023-06-27", timezone: "Asia/Yerevan" })
  )

  const dividedFixtures = response.data.response.reduce((acc, obj) => {
    const leagueId = obj.league.id
    if (!acc[leagueId]) {
      acc[leagueId] = []
    }
    acc[leagueId].push(obj)
    return acc
  }, {})

  const result = Object.values(dividedFixtures)

  return { content: result, error: response.data.errors }
})

const fixtureSlice = createSlice({
  name: "live",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      return { ...state, isLoading: true }
    })
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      return { ...state, isLoading: false, data: action.payload.content }
    })
    builder.addCase(fetchContent.rejected, (state, action) => {
      return { ...state, isLoading: false, error: action.payload.error }
    })
  },
})

export default fixtureSlice.reducer
