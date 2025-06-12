export interface SeedProvince {
  id: string;
  name: string;
}

export const provinces: SeedProvince[] = [
  { id: "CAB", name: "Capital Federal" },
  { id: "BSA", name: "Buenos Aires" },
  { id: "CAT", name: "Catamarca" },
  { id: "COR", name: "Córdoba" },
  { id: "CRR", name: "Corrientes" },
  { id: "CHA", name: "Chaco" },
  { id: "CHU", name: "Chubut" },
  { id: "ENT", name: "Entre Ríos" },
  { id: "FOR", name: "Formosa" },
  { id: "JUJ", name: "Jujuy" },
  { id: "PAM", name: "La Pampa" },
  { id: "RIO", name: "La Rioja" },
  { id: "MEN", name: "Mendoza" },
  { id: "MIS", name: "Misiones" },
  { id: "NEU", name: "Neuquén" },
  { id: "RNE", name: "Río Negro" },
  { id: "SAL", name: "Salta" },
  { id: "SJU", name: "San Juan" },
  { id: "SLU", name: "San Luis" },
  { id: "SCR", name: "Santa Cruz" },
  { id: "SFE", name: "Santa Fe" },
  { id: "SDE", name: "Santiago del Estero" },
  { id: "TDF", name: "Tierra del Fuego" },
  { id: "TUC", name: "Tucumán" },
];

// export interface SeedCity {
//   name: string;
//   provinceId: string; // este es el código que hace referencia a la provincia (ej: "ENT")
// }

// export const city: SeedCity[] = [
//   {
//     provinceId: "BSA",
//     name: "25 de Mayo",
//   },
//   {
//     provinceId: "BSA",
//     name: "3 de febrero",
//   },
//   {
//     provinceId: "BSA",
//     name: "A. Alsina",
//   },
//   {
//     provinceId: "BSA",
//     name: "A. Gonzáles Cháves",
//   },
//   {
//     provinceId: "BSA",
//     name: "Aguas Verdes",
//   },
//   {
//     provinceId: "BSA",
//     name: "Alberti",
//   },
//   {
//     provinceId: "BSA",
//     name: "Arrecifes",
//   },
//   {
//     provinceId: "BSA",
//     name: "Ayacucho",
//   },
//   {
//     provinceId: "BSA",
//     name: "Azul",
//   },
//   {
//     provinceId: "BSA",
//     name: "Bahía Blanca",
//   },
//   {
//     provinceId: "BSA",
//     name: "Balcarce",
//   },
//   {
//     provinceId: "BSA",
//     name: "Baradero",
//   },
//   {
//     provinceId: "BSA",
//     name: "Benito Juárez",
//   },
//   {
//     provinceId: "BSA",
//     name: "Berisso",
//   },
//   {
//     provinceId: "BSA",
//     name: "Bolívar",
//   },
//   {
//     provinceId: "BSA",
//     name: "Bragado",
//   },
//   {
//     provinceId: "BSA",
//     name: "Brandsen",
//   },
//   {
//     provinceId: "BSA",
//     name: "Campana",
//   },
//   {
//     provinceId: "BSA",
//     name: "Cañuelas",
//   },
//   {
//     provinceId: "BSA",
//     name: "Capilla del Señor",
//   },
//   {
//     provinceId: "BSA",
//     name: "Capitán Sarmiento",
//   },
//   {
//     provinceId: "BSA",
//     name: "Carapachay",
//   },
//   {
//     provinceId: "BSA",
//     name: "Carhue",
//   },
//   {
//     provinceId: "BSA",
//     name: "Cariló",
//   },
//   {
//     provinceId: "BSA",
//     name: "Carlos Casares",
//   },
//   {
//     provinceId: "BSA",
//     name: "Carlos Tejedor",
//   },
//   {
//     provinceId: "BSA",
//     name: "Carmen de Areco",
//   },
//   {
//     provinceId: "BSA",
//     name: "Carmen de Patagones",
//   },
//   {
//     provinceId: "BSA",
//     name: "Castelli",
//   },
//   {
//     provinceId: "BSA",
//     name: "Chacabuco",
//   },
//   {
//     provinceId: "BSA",
//     name: "Chascomús",
//   },
//   {
//     provinceId: "BSA",
//     name: "Chivilcoy",
//   },
//   {
//     provinceId: "BSA",
//     name: "Colón",
//   },
//   {
//     provinceId: "BSA",
//     name: "Coronel Dorrego",
//   },
//   {
//     provinceId: "BSA",
//     name: "Coronel Pringles",
//   },
//   {
//     provinceId: "BSA",
//     name: "Coronel Rosales",
//   },
//   {
//     provinceId: "BSA",
//     name: "Coronel Suarez",
//   },
//   {
//     provinceId: "BSA",
//     name: "Costa Azul",
//   },
//   {
//     provinceId: "BSA",
//     name: "Costa Chica",
//   },
//   {
//     provinceId: "BSA",
//     name: "Costa del Este",
//   },
//   {
//     provinceId: "BSA",
//     name: "Costa Esmeralda",
//   },
//   {
//     provinceId: "BSA",
//     name: "Daireaux",
//   },
//   {
//     provinceId: "BSA",
//     name: "Darregueira",
//   },
//   {
//     provinceId: "BSA",
//     name: "Del Viso",
//   },
//   {
//     provinceId: "BSA",
//     name: "Dolores",
//   },
//   {
//     provinceId: "BSA",
//     name: "Don Torcuato",
//   },
//   {
//     provinceId: "BSA",
//     name: "Ensenada",
//   },
//   {
//     provinceId: "BSA",
//     name: "Escobar",
//   },
//   {
//     provinceId: "BSA",
//     name: "Exaltación de la Cruz",
//   },
//   {
//     provinceId: "BSA",
//     name: "Florentino Ameghino",
//   },
//   {
//     provinceId: "BSA",
//     name: "Garín",
//   },
//   {
//     provinceId: "BSA",
//     name: "Gral. Alvarado",
//   },
//   {
//     provinceId: "BSA",
//     name: "Gral. Alvear",
//   },
//   {
//     provinceId: "BSA",
//     name: "Gral. Arenales",
//   },
//   {
//     provinceId: "BSA",
//     name: "Gral. Belgrano",
//   },
//   {
//     provinceId: "BSA",
//     name: "Gral. Guido",
//   },
//   {
//     provinceId: "BSA",
//     name: "Gral. Lamadrid",
//   },
//   {
//     provinceId: "BSA",
//     name: "Gral. Las Heras",
//   },
//   {
//     provinceId: "BSA",
//     name: "Gral. Lavalle",
//   },
//   {
//     provinceId: "BSA",
//     name: "Gral. Madariaga",
//   },
//   {
//     provinceId: "BSA",
//     name: "Gral. Pacheco",
//   },
//   {
//     provinceId: "BSA",
//     name: "Gral. Paz",
//   },
//   {
//     provinceId: "BSA",
//     name: "Gral. Pinto",
//   },
//   {
//     provinceId: "BSA",
//     name: "Gral. Pueyrredón",
//   },
//   {
//     provinceId: "BSA",
//     name: "Gral. Rodríguez",
//   },
//   {
//     provinceId: "BSA",
//     name: "Gral. Viamonte",
//   },
//   {
//     provinceId: "BSA",
//     name: "Gral. Villegas",
//   },
//   {
//     provinceId: "BSA",
//     name: "Guaminí",
//   },
//   {
//     provinceId: "BSA",
//     name: "Guernica",
//   },
//   {
//     provinceId: "BSA",
//     name: "Hipólito Yrigoyen",
//   },
//   {
//     provinceId: "BSA",
//     name: "Ing. Maschwitz",
//   },
//   {
//     provinceId: "BSA",
//     name: "Junín",
//   },
//   {
//     provinceId: "BSA",
//     name: "La Plata",
//   },
//   {
//     provinceId: "BSA",
//     name: "Laprida",
//   },
//   {
//     provinceId: "BSA",
//     name: "Las Flores",
//   },
//   {
//     provinceId: "BSA",
//     name: "Las Toninas",
//   },
//   {
//     provinceId: "BSA",
//     name: "Leandro N. Alem",
//   },
//   {
//     provinceId: "BSA",
//     name: "Lincoln",
//   },
//   {
//     provinceId: "BSA",
//     name: "Loberia",
//   },
//   {
//     provinceId: "BSA",
//     name: "Lobos",
//   },
//   {
//     provinceId: "BSA",
//     name: "Los Cardales",
//   },
//   {
//     provinceId: "BSA",
//     name: "Los Toldos",
//   },
//   {
//     provinceId: "BSA",
//     name: "Lucila del Mar",
//   },
//   {
//     provinceId: "BSA",
//     name: "Luján",
//   },
//   {
//     provinceId: "BSA",
//     name: "Magdalena",
//   },
//   {
//     provinceId: "BSA",
//     name: "Maipú",
//   },
//   {
//     provinceId: "BSA",
//     name: "Mar Chiquita",
//   },
//   {
//     provinceId: "BSA",
//     name: "Mar de Ajó",
//   },
//   {
//     provinceId: "BSA",
//     name: "Mar de las Pampas",
//   },
//   {
//     provinceId: "BSA",
//     name: "Mar del Plata",
//   },
//   {
//     provinceId: "BSA",
//     name: "Mar del Tuyú",
//   },
//   {
//     provinceId: "BSA",
//     name: "Marcos Paz",
//   },
//   {
//     provinceId: "BSA",
//     name: "Mercedes",
//   },
//   {
//     provinceId: "BSA",
//     name: "Miramar",
//   },
//   {
//     provinceId: "BSA",
//     name: "Monte",
//   },
//   {
//     provinceId: "BSA",
//     name: "Monte Hermoso",
//   },
//   {
//     provinceId: "BSA",
//     name: "Munro",
//   },
//   {
//     provinceId: "BSA",
//     name: "Navarro",
//   },
//   {
//     provinceId: "BSA",
//     name: "Necochea",
//   },
//   {
//     provinceId: "BSA",
//     name: "Olavarría",
//   },
//   {
//     provinceId: "BSA",
//     name: "Partido de la Costa",
//   },
//   {
//     provinceId: "BSA",
//     name: "Pehuajó",
//   },
//   {
//     provinceId: "BSA",
//     name: "Pellegrini",
//   },
//   {
//     provinceId: "BSA",
//     name: "Pergamino",
//   },
//   {
//     provinceId: "BSA",
//     name: "Pigüé",
//   },
//   {
//     provinceId: "BSA",
//     name: "Pila",
//   },
//   {
//     provinceId: "BSA",
//     name: "Pilar",
//   },
//   {
//     provinceId: "BSA",
//     name: "Pinamar",
//   },
//   {
//     provinceId: "BSA",
//     name: "Pinar del Sol",
//   },
//   {
//     provinceId: "BSA",
//     name: "Polvorines",
//   },
//   {
//     provinceId: "BSA",
//     name: "Pte. Perón",
//   },
//   {
//     provinceId: "BSA",
//     name: "Puán",
//   },
//   {
//     provinceId: "BSA",
//     name: "Punta Indio",
//   },
//   {
//     provinceId: "BSA",
//     name: "Ramallo",
//   },
//   {
//     provinceId: "BSA",
//     name: "Rauch",
//   },
//   {
//     provinceId: "BSA",
//     name: "Rivadavia",
//   },
//   {
//     provinceId: "BSA",
//     name: "Rojas",
//   },
//   {
//     provinceId: "BSA",
//     name: "Roque Pérez",
//   },
//   {
//     provinceId: "BSA",
//     name: "Saavedra",
//   },
//   {
//     provinceId: "BSA",
//     name: "Saladillo",
//   },
//   {
//     provinceId: "BSA",
//     name: "Salliqueló",
//   },
//   {
//     provinceId: "BSA",
//     name: "Salto",
//   },
//   {
//     provinceId: "BSA",
//     name: "San Andrés de Giles",
//   },
//   {
//     provinceId: "BSA",
//     name: "San Antonio de Areco",
//   },
//   {
//     provinceId: "BSA",
//     name: "San Antonio de Padua",
//   },
//   {
//     provinceId: "BSA",
//     name: "San Bernardo",
//   },
//   {
//     provinceId: "BSA",
//     name: "San Cayetano",
//   },
//   {
//     provinceId: "BSA",
//     name: "San Clemente del Tuyú",
//   },
//   {
//     provinceId: "BSA",
//     name: "San Nicolás",
//   },
//   {
//     provinceId: "BSA",
//     name: "San Pedro",
//   },
//   {
//     provinceId: "BSA",
//     name: "San Vicente",
//   },
//   {
//     provinceId: "BSA",
//     name: "Santa Teresita",
//   },
//   {
//     provinceId: "BSA",
//     name: "Suipacha",
//   },
//   {
//     provinceId: "BSA",
//     name: "Tandil",
//   },
//   {
//     provinceId: "BSA",
//     name: "Tapalqué",
//   },
//   {
//     provinceId: "BSA",
//     name: "Tordillo",
//   },
//   {
//     provinceId: "BSA",
//     name: "Tornquist",
//   },
//   {
//     provinceId: "BSA",
//     name: "Trenque Lauquen",
//   },
//   {
//     provinceId: "BSA",
//     name: "Tres Lomas",
//   },
//   {
//     provinceId: "BSA",
//     name: "Villa Gesell",
//   },
//   {
//     provinceId: "BSA",
//     name: "Villarino",
//   },
//   {
//     provinceId: "BSA",
//     name: "Zárate",
//   },
//   {
//     provinceId: "BSA",
//     name: "11 de Septiembre",
//   },
//   {
//     provinceId: "BSA",
//     name: "20 de Junio",
//   },
//   {
//     provinceId: "BSA",
//     name: "25 de Mayo",
//   },
//   {
//     provinceId: "BSA",
//     name: "Acassuso",
//   },
//   {
//     provinceId: "BSA",
//     name: "Adrogué",
//   },
//   {
//     provinceId: "BSA",
//     name: "Aldo Bonzi",
//   },
//   {
//     provinceId: "BSA",
//     name: "Área Reserva Cinturón Ecológico",
//   },
//   {
//     provinceId: "BSA",
//     name: "Avellaneda",
//   },
//   {
//     provinceId: "BSA",
//     name: "Banfield",
//   },
//   {
//     provinceId: "BSA",
//     name: "Barrio Parque",
//   },
//   {
//     provinceId: "BSA",
//     name: "Barrio Santa Teresita",
//   },
//   {
//     provinceId: "BSA",
//     name: "Beccar",
//   },
//   {
//     provinceId: "BSA",
//     name: "Bella Vista",
//   },
//   {
//     provinceId: "BSA",
//     name: "Berazategui",
//   },
//   {
//     provinceId: "BSA",
//     name: "Bernal Este",
//   },
//   {
//     provinceId: "BSA",
//     name: "Bernal Oeste",
//   },
//   {
//     provinceId: "BSA",
//     name: "Billinghurst",
//   },
//   {
//     provinceId: "BSA",
//     name: "Boulogne",
//   },
//   {
//     provinceId: "BSA",
//     name: "Burzaco",
//   },
//   {
//     provinceId: "BSA",
//     name: "Carapachay",
//   },
//   {
//     provinceId: "BSA",
//     name: "Caseros",
//   },
//   {
//     provinceId: "BSA",
//     name: "Castelar",
//   },
//   {
//     provinceId: "BSA",
//     name: "Churruca",
//   },
//   {
//     provinceId: "BSA",
//     name: "Ciudad Evita",
//   },
//   {
//     provinceId: "BSA",
//     name: "Ciudad Madero",
//   },
//   {
//     provinceId: "BSA",
//     name: "Ciudadela",
//   },
//   {
//     provinceId: "BSA",
//     name: "Claypole",
//   },
//   {
//     provinceId: "BSA",
//     name: "Crucecita",
//   },
//   {
//     provinceId: "BSA",
//     name: "Dock Sud",
//   },
//   {
//     provinceId: "BSA",
//     name: "Don Bosco",
//   },
//   {
//     provinceId: "BSA",
//     name: "Don Orione",
//   },
//   {
//     provinceId: "BSA",
//     name: "El Jagüel",
//   },
//   {
//     provinceId: "BSA",
//     name: "El Libertador",
//   },
//   {
//     provinceId: "BSA",
//     name: "El Palomar",
//   },
//   {
//     provinceId: "BSA",
//     name: "El Tala",
//   },
//   {
//     provinceId: "BSA",
//     name: "El Trébol",
//   },
//   {
//     provinceId: "BSA",
//     name: "Ezeiza",
//   },
//   {
//     provinceId: "BSA",
//     name: "Ezpeleta",
//   },
//   {
//     provinceId: "BSA",
//     name: "Florencio Varela",
//   },
//   {
//     provinceId: "BSA",
//     name: "Florida",
//   },
//   {
//     provinceId: "BSA",
//     name: "Francisco Álvarez",
//   },
//   {
//     provinceId: "BSA",
//     name: "Gerli",
//   },
//   {
//     provinceId: "BSA",
//     name: "Glew",
//   },
//   {
//     provinceId: "BSA",
//     name: "González Catán",
//   },
//   {
//     provinceId: "BSA",
//     name: "Gral. Lamadrid",
//   },
//   {
//     provinceId: "BSA",
//     name: "Grand Bourg",
//   },
//   {
//     provinceId: "BSA",
//     name: "Gregorio de Laferrere",
//   },
//   {
//     provinceId: "BSA",
//     name: "Guillermo Enrique Hudson",
//   },
//   {
//     provinceId: "BSA",
//     name: "Haedo",
//   },
//   {
//     provinceId: "BSA",
//     name: "Hurlingham",
//   },
//   {
//     provinceId: "BSA",
//     name: "Ing. Sourdeaux",
//   },
//   {
//     provinceId: "BSA",
//     name: "Isidro Casanova",
//   },
//   {
//     provinceId: "BSA",
//     name: "Ituzaingó",
//   },
//   {
//     provinceId: "BSA",
//     name: "José C. Paz",
//   },
//   {
//     provinceId: "BSA",
//     name: "José Ingenieros",
//   },
//   {
//     provinceId: "BSA",
//     name: "José Marmol",
//   },
//   {
//     provinceId: "BSA",
//     name: "La Lucila",
//   },
//   {
//     provinceId: "BSA",
//     name: "La Reja",
//   },
//   {
//     provinceId: "BSA",
//     name: "La Tablada",
//   },
//   {
//     provinceId: "BSA",
//     name: "Lanús",
//   },
//   {
//     provinceId: "BSA",
//     name: "Llavallol",
//   },
//   {
//     provinceId: "BSA",
//     name: "Loma Hermosa",
//   },
//   {
//     provinceId: "BSA",
//     name: "Lomas de Zamora",
//   },
//   {
//     provinceId: "BSA",
//     name: "Lomas del Millón",
//   },
//   {
//     provinceId: "BSA",
//     name: "Lomas del Mirador",
//   },
//   {
//     provinceId: "BSA",
//     name: "Longchamps",
//   },
//   {
//     provinceId: "BSA",
//     name: "Los Polvorines",
//   },
//   {
//     provinceId: "BSA",
//     name: "Luis Guillón",
//   },
//   {
//     provinceId: "BSA",
//     name: "Malvinas Argentinas",
//   },
//   {
//     provinceId: "BSA",
//     name: "Martín Coronado",
//   },
//   {
//     provinceId: "BSA",
//     name: "Martínez",
//   },
//   {
//     provinceId: "BSA",
//     name: "Merlo",
//   },
//   {
//     provinceId: "BSA",
//     name: "Ministro Rivadavia",
//   },
//   {
//     provinceId: "BSA",
//     name: "Monte Chingolo",
//   },
//   {
//     provinceId: "BSA",
//     name: "Monte Grande",
//   },
//   {
//     provinceId: "BSA",
//     name: "Moreno",
//   },
//   {
//     provinceId: "BSA",
//     name: "Morón",
//   },
//   {
//     provinceId: "BSA",
//     name: "Muñiz",
//   },
//   {
//     provinceId: "BSA",
//     name: "Olivos",
//   },
//   {
//     provinceId: "BSA",
//     name: "Pablo Nogués",
//   },
//   {
//     provinceId: "BSA",
//     name: "Pablo Podestá",
//   },
//   {
//     provinceId: "BSA",
//     name: "Paso del Rey",
//   },
//   {
//     provinceId: "BSA",
//     name: "Pereyra",
//   },
//   {
//     provinceId: "BSA",
//     name: "Piñeiro",
//   },
//   {
//     provinceId: "BSA",
//     name: "Plátanos",
//   },
//   {
//     provinceId: "BSA",
//     name: "Pontevedra",
//   },
//   {
//     provinceId: "BSA",
//     name: "Quilmes",
//   },
//   {
//     provinceId: "BSA",
//     name: "Rafael Calzada",
//   },
//   {
//     provinceId: "BSA",
//     name: "Rafael Castillo",
//   },
//   {
//     provinceId: "BSA",
//     name: "Ramos Mejía",
//   },
//   {
//     provinceId: "BSA",
//     name: "Ranelagh",
//   },
//   {
//     provinceId: "BSA",
//     name: "Remedios de Escalada",
//   },
//   {
//     provinceId: "BSA",
//     name: "Sáenz Peña",
//   },
//   {
//     provinceId: "BSA",
//     name: "San Antonio de Padua",
//   },
//   {
//     provinceId: "BSA",
//     name: "San Fernando",
//   },
//   {
//     provinceId: "BSA",
//     name: "San Francisco Solano",
//   },
//   {
//     provinceId: "BSA",
//     name: "San Isidro",
//   },
//   {
//     provinceId: "BSA",
//     name: "San José",
//   },
//   {
//     provinceId: "BSA",
//     name: "San Justo",
//   },
//   {
//     provinceId: "BSA",
//     name: "San Martín",
//   },
//   {
//     provinceId: "BSA",
//     name: "San Miguel",
//   },
//   {
//     provinceId: "BSA",
//     name: "Santos Lugares",
//   },
//   {
//     provinceId: "BSA",
//     name: "Sarandí",
//   },
//   {
//     provinceId: "BSA",
//     name: "Sourigues",
//   },
//   {
//     provinceId: "BSA",
//     name: "Tapiales",
//   },
//   {
//     provinceId: "BSA",
//     name: "Temperley",
//   },
//   {
//     provinceId: "BSA",
//     name: "Tigre",
//   },
//   {
//     provinceId: "BSA",
//     name: "Tortuguitas",
//   },
//   {
//     provinceId: "BSA",
//     name: "Tristán Suárez",
//   },
//   {
//     provinceId: "BSA",
//     name: "Trujui",
//   },
//   {
//     provinceId: "BSA",
//     name: "Turdera",
//   },
//   {
//     provinceId: "BSA",
//     name: "Valentín Alsina",
//   },
//   {
//     provinceId: "BSA",
//     name: "Vicente López",
//   },
//   {
//     provinceId: "BSA",
//     name: "Villa Adelina",
//   },
//   {
//     provinceId: "BSA",
//     name: "Villa Ballester",
//   },
//   {
//     provinceId: "BSA",
//     name: "Villa Bosch",
//   },
//   {
//     provinceId: "BSA",
//     name: "Villa Caraza",
//   },
//   {
//     provinceId: "BSA",
//     name: "Villa Celina",
//   },
//   {
//     provinceId: "BSA",
//     name: "Villa Centenario",
//   },
//   {
//     provinceId: "BSA",
//     name: "Villa de Mayo",
//   },
//   {
//     provinceId: "BSA",
//     name: "Villa Diamante",
//   },
//   {
//     provinceId: "BSA",
//     name: "Villa Domínico",
//   },
//   {
//     provinceId: "BSA",
//     name: "Villa España",
//   },
//   {
//     provinceId: "BSA",
//     name: "Villa Fiorito",
//   },
//   {
//     provinceId: "BSA",
//     name: "Villa Guillermina",
//   },
//   {
//     provinceId: "BSA",
//     name: "Villa Insuperable",
//   },
//   {
//     provinceId: "BSA",
//     name: "Villa José León Suárez",
//   },
//   {
//     provinceId: "BSA",
//     name: "Villa La Florida",
//   },
//   {
//     provinceId: "BSA",
//     name: "Villa Luzuriaga",
//   },
//   {
//     provinceId: "BSA",
//     name: "Villa Martelli",
//   },
//   {
//     provinceId: "BSA",
//     name: "Villa Obrera",
//   },
//   {
//     provinceId: "BSA",
//     name: "Villa Progreso",
//   },
//   {
//     provinceId: "BSA",
//     name: "Villa Raffo",
//   },
//   {
//     provinceId: "BSA",
//     name: "Villa Sarmiento",
//   },
//   {
//     provinceId: "BSA",
//     name: "Villa Tesei",
//   },
//   {
//     provinceId: "BSA",
//     name: "Villa Udaondo",
//   },
//   {
//     provinceId: "BSA",
//     name: "Virrey del Pino",
//   },
//   {
//     provinceId: "BSA",
//     name: "Wilde",
//   },
//   {
//     provinceId: "BSA",
//     name: "William Morris",
//   },
//   {
//     provinceId: "CAB",
//     name: "Agronomía",
//   },
//   {
//     provinceId: "CAB",
//     name: "Almagro",
//   },
//   {
//     provinceId: "CAB",
//     name: "Balvanera",
//   },
//   {
//     provinceId: "CAB",
//     name: "Barracas",
//   },
//   {
//     provinceId: "CAB",
//     name: "Belgrano",
//   },
//   {
//     provinceId: "CAB",
//     name: "Boca",
//   },
//   {
//     provinceId: "CAB",
//     name: "Boedo",
//   },
//   {
//     provinceId: "CAB",
//     name: "Caballito",
//   },
//   {
//     provinceId: "CAB",
//     name: "Chacarita",
//   },
//   {
//     provinceId: "CAB",
//     name: "Coghlan",
//   },
//   {
//     provinceId: "CAB",
//     name: "Colegiales",
//   },
//   {
//     provinceId: "CAB",
//     name: "Constitución",
//   },
//   {
//     provinceId: "CAB",
//     name: "Flores",
//   },
//   {
//     provinceId: "CAB",
//     name: "Floresta",
//   },
//   {
//     provinceId: "CAB",
//     name: "La Paternal",
//   },
//   {
//     provinceId: "CAB",
//     name: "Liniers",
//   },
//   {
//     provinceId: "CAB",
//     name: "Mataderos",
//   },
//   {
//     provinceId: "CAB",
//     name: "Monserrat",
//   },
//   {
//     provinceId: "CAB",
//     name: "Monte Castro",
//   },
//   {
//     provinceId: "CAB",
//     name: "Nueva Pompeya",
//   },
//   {
//     provinceId: "CAB",
//     name: "Núñez",
//   },
//   {
//     provinceId: "CAB",
//     name: "Palermo",
//   },
//   {
//     provinceId: "CAB",
//     name: "Parque Avellaneda",
//   },
//   {
//     provinceId: "CAB",
//     name: "Parque Chacabuco",
//   },
//   {
//     provinceId: "CAB",
//     name: "Parque Chas",
//   },
//   {
//     provinceId: "CAB",
//     name: "Parque Patricios",
//   },
//   {
//     provinceId: "CAB",
//     name: "Puerto Madero",
//   },
//   {
//     provinceId: "CAB",
//     name: "Recoleta",
//   },
//   {
//     provinceId: "CAB",
//     name: "Retiro",
//   },
//   {
//     provinceId: "CAB",
//     name: "Saavedra",
//   },
//   {
//     provinceId: "CAB",
//     name: "San Cristóbal",
//   },
//   {
//     provinceId: "CAB",
//     name: "San Nicolás",
//   },
//   {
//     provinceId: "CAB",
//     name: "San Telmo",
//   },
//   {
//     provinceId: "CAB",
//     name: "Vélez Sársfield",
//   },
//   {
//     provinceId: "CAB",
//     name: "Versalles",
//   },
//   {
//     provinceId: "CAB",
//     name: "Villa Crespo",
//   },
//   {
//     provinceId: "CAB",
//     name: "Villa del Parque",
//   },
//   {
//     provinceId: "CAB",
//     name: "Villa Devoto",
//   },
//   {
//     provinceId: "CAB",
//     name: "Villa Gral. Mitre",
//   },
//   {
//     provinceId: "CAB",
//     name: "Villa Lugano",
//   },
//   {
//     provinceId: "CAB",
//     name: "Villa Luro",
//   },
//   {
//     provinceId: "CAB",
//     name: "Villa Ortúzar",
//   },
//   {
//     provinceId: "CAB",
//     name: "Villa Pueyrredón",
//   },
//   {
//     provinceId: "CAB",
//     name: "Villa Real",
//   },
//   {
//     provinceId: "CAB",
//     name: "Villa Riachuelo",
//   },
//   {
//     provinceId: "CAB",
//     name: "Villa Santa Rita",
//   },
//   {
//     provinceId: "CAB",
//     name: "Villa Soldati",
//   },
//   {
//     provinceId: "CAB",
//     name: "Villa Urquiza",
//   },
//   {
//     provinceId: "CAT",
//     name: "Aconquija",
//   },
//   {
//     provinceId: "CAT",
//     name: "Ancasti",
//   },
//   {
//     provinceId: "CAT",
//     name: "Andalgalá",
//   },
//   {
//     provinceId: "CAT",
//     name: "Antofagasta",
//   },
//   {
//     provinceId: "CAT",
//     name: "Belén",
//   },
//   {
//     provinceId: "CAT",
//     name: "Capayán",
//   },
//   {
//     provinceId: "CAT",
//     name: "Capital",
//   },
//   {
//     provinceId: "CAT",
//     name: "4",
//   },
//   {
//     provinceId: "CAT",
//     name: "Corral Quemado",
//   },
//   {
//     provinceId: "CAT",
//     name: "El Alto",
//   },
//   {
//     provinceId: "CAT",
//     name: "El Rodeo",
//   },
//   {
//     provinceId: "CAT",
//     name: "F.Mamerto Esquiú",
//   },
//   {
//     provinceId: "CAT",
//     name: "Fiambalá",
//   },
//   {
//     provinceId: "CAT",
//     name: "Hualfín",
//   },
//   {
//     provinceId: "CAT",
//     name: "Huillapima",
//   },
//   {
//     provinceId: "CAT",
//     name: "Icaño",
//   },
//   {
//     provinceId: "CAT",
//     name: "La Puerta",
//   },
//   {
//     provinceId: "CAT",
//     name: "Las Juntas",
//   },
//   {
//     provinceId: "CAT",
//     name: "Londres",
//   },
//   {
//     provinceId: "CAT",
//     name: "Los Altos",
//   },
//   {
//     provinceId: "CAT",
//     name: "Los Varela",
//   },
//   {
//     provinceId: "CAT",
//     name: "Mutquín",
//   },
//   {
//     provinceId: "CAT",
//     name: "Paclín",
//   },
//   {
//     provinceId: "CAT",
//     name: "Poman",
//   },
//   {
//     provinceId: "CAT",
//     name: "Pozo de La Piedra",
//   },
//   {
//     provinceId: "CAT",
//     name: "Puerta de Corral",
//   },
//   {
//     provinceId: "CAT",
//     name: "Puerta San José",
//   },
//   {
//     provinceId: "CAT",
//     name: "Recreo",
//   },
//   {
//     provinceId: "CAT",
//     name: "S.F.V de 4",
//   },
//   {
//     provinceId: "CAT",
//     name: "San Fernando",
//   },
//   {
//     provinceId: "CAT",
//     name: "San Fernando del Valle",
//   },
//   {
//     provinceId: "CAT",
//     name: "San José",
//   },
//   {
//     provinceId: "CAT",
//     name: "Santa María",
//   },
//   {
//     provinceId: "CAT",
//     name: "Santa Rosa",
//   },
//   {
//     provinceId: "CAT",
//     name: "Saujil",
//   },
//   {
//     provinceId: "CAT",
//     name: "Tapso",
//   },
//   {
//     provinceId: "CAT",
//     name: "Tinogasta",
//   },
//   {
//     provinceId: "CAT",
//     name: "Valle Viejo",
//   },
//   {
//     provinceId: "CAT",
//     name: "Villa Vil",
//   },
//   {
//     provinceId: "CHA",
//     name: "Aviá Teraí",
//   },
//   {
//     provinceId: "CHA",
//     name: "Barranqueras",
//   },
//   {
//     provinceId: "CHA",
//     name: "Basail",
//   },
//   {
//     provinceId: "CHA",
//     name: "Campo Largo",
//   },
//   {
//     provinceId: "CHA",
//     name: "Capital",
//   },
//   {
//     provinceId: "CHA",
//     name: "Capitán Solari",
//   },
//   {
//     provinceId: "CHA",
//     name: "Charadai",
//   },
//   {
//     provinceId: "CHA",
//     name: "Charata",
//   },
//   {
//     provinceId: "CHA",
//     name: "Chorotis",
//   },
//   {
//     provinceId: "CHA",
//     name: "Ciervo Petiso",
//   },
//   {
//     provinceId: "CHA",
//     name: "Cnel. Du Graty",
//   },
//   {
//     provinceId: "CHA",
//     name: "Col. Benítez",
//   },
//   {
//     provinceId: "CHA",
//     name: "Col. Elisa",
//   },
//   {
//     provinceId: "CHA",
//     name: "Col. Popular",
//   },
//   {
//     provinceId: "CHA",
//     name: "Colonias Unidas",
//   },
//   {
//     provinceId: "CHA",
//     name: "Concepción",
//   },
//   {
//     provinceId: "CHA",
//     name: "Corzuela",
//   },
//   {
//     provinceId: "CHA",
//     name: "Cote Lai",
//   },
//   {
//     provinceId: "CHA",
//     name: "El Sauzalito",
//   },
//   {
//     provinceId: "CHA",
//     name: "Enrique Urien",
//   },
//   {
//     provinceId: "CHA",
//     name: "Fontana",
//   },
//   {
//     provinceId: "CHA",
//     name: "Fte. Esperanza",
//   },
//   {
//     provinceId: "CHA",
//     name: "Gancedo",
//   },
//   {
//     provinceId: "CHA",
//     name: "Gral. Capdevila",
//   },
//   {
//     provinceId: "CHA",
//     name: "Gral. Pinero",
//   },
//   {
//     provinceId: "CHA",
//     name: "Gral. San Martín",
//   },
//   {
//     provinceId: "CHA",
//     name: "Gral. Vedia",
//   },
//   {
//     provinceId: "CHA",
//     name: "Hermoso Campo",
//   },
//   {
//     provinceId: "CHA",
//     name: "I. del Cerrito",
//   },
//   {
//     provinceId: "CHA",
//     name: "J.J. Castelli",
//   },
//   {
//     provinceId: "CHA",
//     name: "La Clotilde",
//   },
//   {
//     provinceId: "CHA",
//     name: "La Eduvigis",
//   },
//   {
//     provinceId: "CHA",
//     name: "La Escondida",
//   },
//   {
//     provinceId: "CHA",
//     name: "La Leonesa",
//   },
//   {
//     provinceId: "CHA",
//     name: "La Tigra",
//   },
//   {
//     provinceId: "CHA",
//     name: "La Verde",
//   },
//   {
//     provinceId: "CHA",
//     name: "Laguna Blanca",
//   },
//   {
//     provinceId: "CHA",
//     name: "Laguna Limpia",
//   },
//   {
//     provinceId: "CHA",
//     name: "Lapachito",
//   },
//   {
//     provinceId: "CHA",
//     name: "Las Breñas",
//   },
//   {
//     provinceId: "CHA",
//     name: "Las Garcitas",
//   },
//   {
//     provinceId: "CHA",
//     name: "Las Palmas",
//   },
//   {
//     provinceId: "CHA",
//     name: "Los Frentones",
//   },
//   {
//     provinceId: "CHA",
//     name: "Machagai",
//   },
//   {
//     provinceId: "CHA",
//     name: "Makallé",
//   },
//   {
//     provinceId: "CHA",
//     name: "Margarita Belén",
//   },
//   {
//     provinceId: "CHA",
//     name: "Miraflores",
//   },
//   {
//     provinceId: "CHA",
//     name: "Misión N. Pompeya",
//   },
//   {
//     provinceId: "CHA",
//     name: "Napenay",
//   },
//   {
//     provinceId: "CHA",
//     name: "Pampa Almirón",
//   },
//   {
//     provinceId: "CHA",
//     name: "Pampa del Indio",
//   },
//   {
//     provinceId: "CHA",
//     name: "Pampa del Infierno",
//   },
//   {
//     provinceId: "CHA",
//     name: "Pdcia. de La Plaza",
//   },
//   {
//     provinceId: "CHA",
//     name: "Pdcia. Roca",
//   },
//   {
//     provinceId: "CHA",
//     name: "Pdcia. Roque Sáenz Peña",
//   },
//   {
//     provinceId: "CHA",
//     name: "Pto. Bermejo",
//   },
//   {
//     provinceId: "CHA",
//     name: "Pto. Eva Perón",
//   },
//   {
//     provinceId: "CHA",
//     name: "Puero Tirol",
//   },
//   {
//     provinceId: "CHA",
//     name: "Puerto Vilelas",
//   },
//   {
//     provinceId: "CHA",
//     name: "Quitilipi",
//   },
//   {
//     provinceId: "CHA",
//     name: "Resistencia",
//   },
//   {
//     provinceId: "CHA",
//     name: "Sáenz Peña",
//   },
//   {
//     provinceId: "CHA",
//     name: "Samuhú",
//   },
//   {
//     provinceId: "CHA",
//     name: "San Bernardo",
//   },
//   {
//     provinceId: "CHA",
//     name: "Santa Sylvina",
//   },
//   {
//     provinceId: "CHA",
//     name: "Taco Pozo",
//   },
//   {
//     provinceId: "CHA",
//     name: "Tres Isletas",
//   },
//   {
//     provinceId: "CHA",
//     name: "Villa Ángela",
//   },
//   {
//     provinceId: "CHA",
//     name: "Villa Berthet",
//   },
//   {
//     provinceId: "CHA",
//     name: "Villa R. Bermejito",
//   },
//   {
//     provinceId: "CHU",
//     name: "Aldea Apeleg",
//   },
//   {
//     provinceId: "CHU",
//     name: "Aldea Beleiro",
//   },
//   {
//     provinceId: "CHU",
//     name: "Aldea Epulef",
//   },
//   {
//     provinceId: "CHU",
//     name: "Alto Río Sengerr",
//   },
//   {
//     provinceId: "CHU",
//     name: "Buen Pasto",
//   },
//   {
//     provinceId: "CHU",
//     name: "Camarones",
//   },
//   {
//     provinceId: "CHU",
//     name: "Carrenleufú",
//   },
//   {
//     provinceId: "CHU",
//     name: "Cholila",
//   },
//   {
//     provinceId: "CHU",
//     name: "Co. Centinela",
//   },
//   {
//     provinceId: "CHU",
//     name: "Colan Conhué",
//   },
//   {
//     provinceId: "CHU",
//     name: "Comodoro Rivadavia",
//   },
//   {
//     provinceId: "CHU",
//     name: "Corcovado",
//   },
//   {
//     provinceId: "CHU",
//     name: "Cushamen",
//   },
//   {
//     provinceId: "CHU",
//     name: "Dique F. Ameghino",
//   },
//   {
//     provinceId: "CHU",
//     name: "Dolavón",
//   },
//   {
//     provinceId: "CHU",
//     name: "Dr. R. Rojas",
//   },
//   {
//     provinceId: "CHU",
//     name: "El Hoyo",
//   },
//   {
//     provinceId: "CHU",
//     name: "El Maitén",
//   },
//   {
//     provinceId: "CHU",
//     name: "Epuyén",
//   },
//   {
//     provinceId: "CHU",
//     name: "Esquel",
//   },
//   {
//     provinceId: "CHU",
//     name: "Facundo",
//   },
//   {
//     provinceId: "CHU",
//     name: "Gaimán",
//   },
//   {
//     provinceId: "CHU",
//     name: "Gan Gan",
//   },
//   {
//     provinceId: "CHU",
//     name: "Gastre",
//   },
//   {
//     provinceId: "CHU",
//     name: "Gdor. Costa",
//   },
//   {
//     provinceId: "CHU",
//     name: "Gualjaina",
//   },
//   {
//     provinceId: "CHU",
//     name: "J. de San Martín",
//   },
//   {
//     provinceId: "CHU",
//     name: "Lago Blanco",
//   },
//   {
//     provinceId: "CHU",
//     name: "Lago Puelo",
//   },
//   {
//     provinceId: "CHU",
//     name: "Lagunita Salada",
//   },
//   {
//     provinceId: "CHU",
//     name: "Las Plumas",
//   },
//   {
//     provinceId: "CHU",
//     name: "Los Altares",
//   },
//   {
//     provinceId: "CHU",
//     name: "Paso de los Indios",
//   },
//   {
//     provinceId: "CHU",
//     name: "Paso del Sapo",
//   },
//   {
//     provinceId: "CHU",
//     name: "Pto. Madryn",
//   },
//   {
//     provinceId: "CHU",
//     name: "Pto. Pirámides",
//   },
//   {
//     provinceId: "CHU",
//     name: "Rada Tilly",
//   },
//   {
//     provinceId: "CHU",
//     name: "Rawson",
//   },
//   {
//     provinceId: "CHU",
//     name: "Río Mayo",
//   },
//   {
//     provinceId: "CHU",
//     name: "Río Pico",
//   },
//   {
//     provinceId: "CHU",
//     name: "Sarmiento",
//   },
//   {
//     provinceId: "CHU",
//     name: "Tecka",
//   },
//   {
//     provinceId: "CHU",
//     name: "Telsen",
//   },
//   {
//     provinceId: "CHU",
//     name: "Trelew",
//   },
//   {
//     provinceId: "CHU",
//     name: "Trevelin",
//   },
//   {
//     provinceId: "CHU",
//     name: "Veintiocho de Julio",
//   },
//   {
//     provinceId: "COR",
//     name: "Achiras",
//   },
//   {
//     provinceId: "COR",
//     name: "Adelia Maria",
//   },
//   {
//     provinceId: "COR",
//     name: "Agua de Oro",
//   },
//   {
//     provinceId: "COR",
//     name: "Alcira Gigena",
//   },
//   {
//     provinceId: "COR",
//     name: "Aldea Santa Maria",
//   },
//   {
//     provinceId: "COR",
//     name: "Alejandro Roca",
//   },
//   {
//     provinceId: "COR",
//     name: "Alejo Ledesma",
//   },
//   {
//     provinceId: "COR",
//     name: "Alicia",
//   },
//   {
//     provinceId: "COR",
//     name: "Almafuerte",
//   },
//   {
//     provinceId: "COR",
//     name: "Alpa Corral",
//   },
//   {
//     provinceId: "COR",
//     name: "Alta Gracia",
//   },
//   {
//     provinceId: "COR",
//     name: "Alto Alegre",
//   },
//   {
//     provinceId: "COR",
//     name: "Alto de Los Quebrachos",
//   },
//   {
//     provinceId: "COR",
//     name: "Altos de Chipion",
//   },
//   {
//     provinceId: "COR",
//     name: "Amboy",
//   },
//   {
//     provinceId: "COR",
//     name: "Ambul",
//   },
//   {
//     provinceId: "COR",
//     name: "Ana Zumaran",
//   },
//   {
//     provinceId: "COR",
//     name: "Anisacate",
//   },
//   {
//     provinceId: "COR",
//     name: "Arguello",
//   },
//   {
//     provinceId: "COR",
//     name: "Arias",
//   },
//   {
//     provinceId: "COR",
//     name: "Arroyito",
//   },
//   {
//     provinceId: "COR",
//     name: "Arroyo Algodon",
//   },
//   {
//     provinceId: "COR",
//     name: "Arroyo Cabral",
//   },
//   {
//     provinceId: "COR",
//     name: "Arroyo Los Patos",
//   },
//   {
//     provinceId: "COR",
//     name: "Assunta",
//   },
//   {
//     provinceId: "COR",
//     name: "Atahona",
//   },
//   {
//     provinceId: "COR",
//     name: "Ausonia",
//   },
//   {
//     provinceId: "COR",
//     name: "Avellaneda",
//   },
//   {
//     provinceId: "COR",
//     name: "Ballesteros",
//   },
//   {
//     provinceId: "COR",
//     name: "Ballesteros Sud",
//   },
//   {
//     provinceId: "COR",
//     name: "Balnearia",
//   },
//   {
//     provinceId: "COR",
//     name: "Bañado de Soto",
//   },
//   {
//     provinceId: "COR",
//     name: "Bell Ville",
//   },
//   {
//     provinceId: "COR",
//     name: "Bengolea",
//   },
//   {
//     provinceId: "COR",
//     name: "Benjamin Gould",
//   },
//   {
//     provinceId: "COR",
//     name: "Berrotaran",
//   },
//   {
//     provinceId: "COR",
//     name: "Bialet Masse",
//   },
//   {
//     provinceId: "COR",
//     name: "Bouwer",
//   },
//   {
//     provinceId: "COR",
//     name: "Brinkmann",
//   },
//   {
//     provinceId: "COR",
//     name: "Buchardo",
//   },
//   {
//     provinceId: "COR",
//     name: "Bulnes",
//   },
//   {
//     provinceId: "COR",
//     name: "Cabalango",
//   },
//   {
//     provinceId: "COR",
//     name: "Calamuchita",
//   },
//   {
//     provinceId: "COR",
//     name: "Calchin",
//   },
//   {
//     provinceId: "COR",
//     name: "Calchin Oeste",
//   },
//   {
//     provinceId: "COR",
//     name: "Calmayo",
//   },
//   {
//     provinceId: "COR",
//     name: "Camilo Aldao",
//   },
//   {
//     provinceId: "COR",
//     name: "Caminiaga",
//   },
//   {
//     provinceId: "COR",
//     name: "Cañada de Luque",
//   },
//   {
//     provinceId: "COR",
//     name: "Cañada de Machado",
//   },
//   {
//     provinceId: "COR",
//     name: "Cañada de Rio Pinto",
//   },
//   {
//     provinceId: "COR",
//     name: "Cañada del Sauce",
//   },
//   {
//     provinceId: "COR",
//     name: "Canals",
//   },
//   {
//     provinceId: "COR",
//     name: "Candelaria Sud",
//   },
//   {
//     provinceId: "COR",
//     name: "Capilla de Remedios",
//   },
//   {
//     provinceId: "COR",
//     name: "Capilla de Siton",
//   },
//   {
//     provinceId: "COR",
//     name: "Capilla del Carmen",
//   },
//   {
//     provinceId: "COR",
//     name: "Capilla del Monte",
//   },
//   {
//     provinceId: "COR",
//     name: "Capital",
//   },
//   {
//     provinceId: "COR",
//     name: "Capitan Gral B. O´Higgins",
//   },
//   {
//     provinceId: "COR",
//     name: "Carnerillo",
//   },
//   {
//     provinceId: "COR",
//     name: "Carrilobo",
//   },
//   {
//     provinceId: "COR",
//     name: "Casa Grande",
//   },
//   {
//     provinceId: "COR",
//     name: "Cavanagh",
//   },
//   {
//     provinceId: "COR",
//     name: "Cerro Colorado",
//   },
//   {
//     provinceId: "COR",
//     name: "Chaján",
//   },
//   {
//     provinceId: "COR",
//     name: "Chalacea",
//   },
//   {
//     provinceId: "COR",
//     name: "Chañar Viejo",
//   },
//   {
//     provinceId: "COR",
//     name: "Chancaní",
//   },
//   {
//     provinceId: "COR",
//     name: "Charbonier",
//   },
//   {
//     provinceId: "COR",
//     name: "Charras",
//   },
//   {
//     provinceId: "COR",
//     name: "Chazón",
//   },
//   {
//     provinceId: "COR",
//     name: "Chilibroste",
//   },
//   {
//     provinceId: "COR",
//     name: "Chucul",
//   },
//   {
//     provinceId: "COR",
//     name: "Chuña",
//   },
//   {
//     provinceId: "COR",
//     name: "Chuña Huasi",
//   },
//   {
//     provinceId: "COR",
//     name: "Churqui Cañada",
//   },
//   {
//     provinceId: "COR",
//     name: "Cienaga Del Coro",
//   },
//   {
//     provinceId: "COR",
//     name: "Cintra",
//   },
//   {
//     provinceId: "COR",
//     name: "Col. Almada",
//   },
//   {
//     provinceId: "COR",
//     name: "Col. Anita",
//   },
//   {
//     provinceId: "COR",
//     name: "Col. Barge",
//   },
//   {
//     provinceId: "COR",
//     name: "Col. Bismark",
//   },
//   {
//     provinceId: "COR",
//     name: "Col. Bremen",
//   },
//   {
//     provinceId: "COR",
//     name: "Col. Caroya",
//   },
//   {
//     provinceId: "COR",
//     name: "Col. Italiana",
//   },
//   {
//     provinceId: "COR",
//     name: "Col. Iturraspe",
//   },
//   {
//     provinceId: "COR",
//     name: "Col. Las Cuatro Esquinas",
//   },
//   {
//     provinceId: "COR",
//     name: "Col. Las Pichanas",
//   },
//   {
//     provinceId: "COR",
//     name: "Col. Marina",
//   },
//   {
//     provinceId: "COR",
//     name: "Col. Prosperidad",
//   },
//   {
//     provinceId: "COR",
//     name: "Col. San Bartolome",
//   },
//   {
//     provinceId: "COR",
//     name: "Col. San Pedro",
//   },
//   {
//     provinceId: "COR",
//     name: "Col. Tirolesa",
//   },
//   {
//     provinceId: "COR",
//     name: "Col. Vicente Aguero",
//   },
//   {
//     provinceId: "COR",
//     name: "Col. Videla",
//   },
//   {
//     provinceId: "COR",
//     name: "Col. Vignaud",
//   },
//   {
//     provinceId: "COR",
//     name: "Col. Waltelina",
//   },
//   {
//     provinceId: "COR",
//     name: "Colazo",
//   },
//   {
//     provinceId: "COR",
//     name: "Comechingones",
//   },
//   {
//     provinceId: "COR",
//     name: "Conlara",
//   },
//   {
//     provinceId: "COR",
//     name: "Copacabana",
//   },
//   {
//     provinceId: "COR",
//     name: "7",
//   },
//   {
//     provinceId: "COR",
//     name: "Coronel Baigorria",
//   },
//   {
//     provinceId: "COR",
//     name: "Coronel Moldes",
//   },
//   {
//     provinceId: "COR",
//     name: "Corral de Bustos",
//   },
//   {
//     provinceId: "COR",
//     name: "Corralito",
//   },
//   {
//     provinceId: "COR",
//     name: "Cosquín",
//   },
//   {
//     provinceId: "COR",
//     name: "Costa Sacate",
//   },
//   {
//     provinceId: "COR",
//     name: "Cruz Alta",
//   },
//   {
//     provinceId: "COR",
//     name: "Cruz de Caña",
//   },
//   {
//     provinceId: "COR",
//     name: "Cruz del Eje",
//   },
//   {
//     provinceId: "COR",
//     name: "Cuesta Blanca",
//   },
//   {
//     provinceId: "COR",
//     name: "Dean Funes",
//   },
//   {
//     provinceId: "COR",
//     name: "Del Campillo",
//   },
//   {
//     provinceId: "COR",
//     name: "Despeñaderos",
//   },
//   {
//     provinceId: "COR",
//     name: "Devoto",
//   },
//   {
//     provinceId: "COR",
//     name: "Diego de Rojas",
//   },
//   {
//     provinceId: "COR",
//     name: "Dique Chico",
//   },
//   {
//     provinceId: "COR",
//     name: "El Arañado",
//   },
//   {
//     provinceId: "COR",
//     name: "El Brete",
//   },
//   {
//     provinceId: "COR",
//     name: "El Chacho",
//   },
//   {
//     provinceId: "COR",
//     name: "El Crispín",
//   },
//   {
//     provinceId: "COR",
//     name: "El Fortín",
//   },
//   {
//     provinceId: "COR",
//     name: "El Manzano",
//   },
//   {
//     provinceId: "COR",
//     name: "El Rastreador",
//   },
//   {
//     provinceId: "COR",
//     name: "El Rodeo",
//   },
//   {
//     provinceId: "COR",
//     name: "El Tío",
//   },
//   {
//     provinceId: "COR",
//     name: "Elena",
//   },
//   {
//     provinceId: "COR",
//     name: "Embalse",
//   },
//   {
//     provinceId: "COR",
//     name: "Esquina",
//   },
//   {
//     provinceId: "COR",
//     name: "Estación Gral. Paz",
//   },
//   {
//     provinceId: "COR",
//     name: "Estación Juárez Celman",
//   },
//   {
//     provinceId: "COR",
//     name: "Estancia de Guadalupe",
//   },
//   {
//     provinceId: "COR",
//     name: "Estancia Vieja",
//   },
//   {
//     provinceId: "COR",
//     name: "Etruria",
//   },
//   {
//     provinceId: "COR",
//     name: "Eufrasio Loza",
//   },
//   {
//     provinceId: "COR",
//     name: "Falda del Carmen",
//   },
//   {
//     provinceId: "COR",
//     name: "Freyre",
//   },
//   {
//     provinceId: "COR",
//     name: "Gral. Baldissera",
//   },
//   {
//     provinceId: "COR",
//     name: "Gral. Cabrera",
//   },
//   {
//     provinceId: "COR",
//     name: "Gral. Deheza",
//   },
//   {
//     provinceId: "COR",
//     name: "Gral. Fotheringham",
//   },
//   {
//     provinceId: "COR",
//     name: "Gral. Levalle",
//   },
//   {
//     provinceId: "COR",
//     name: "Gral. Roca",
//   },
//   {
//     provinceId: "COR",
//     name: "Guanaco Muerto",
//   },
//   {
//     provinceId: "COR",
//     name: "Guasapampa",
//   },
//   {
//     provinceId: "COR",
//     name: "Guatimozin",
//   },
//   {
//     provinceId: "COR",
//     name: "Gutenberg",
//   },
//   {
//     provinceId: "COR",
//     name: "Hernando",
//   },
//   {
//     provinceId: "COR",
//     name: "Huanchillas",
//   },
//   {
//     provinceId: "COR",
//     name: "Huerta Grande",
//   },
//   {
//     provinceId: "COR",
//     name: "Huinca Renanco",
//   },
//   {
//     provinceId: "COR",
//     name: "Idiazabal",
//   },
//   {
//     provinceId: "COR",
//     name: "Impira",
//   },
//   {
//     provinceId: "COR",
//     name: "Inriville",
//   },
//   {
//     provinceId: "COR",
//     name: "Isla Verde",
//   },
//   {
//     provinceId: "COR",
//     name: "Italó",
//   },
//   {
//     provinceId: "COR",
//     name: "James Craik",
//   },
//   {
//     provinceId: "COR",
//     name: "Jesús María",
//   },
//   {
//     provinceId: "COR",
//     name: "Jovita",
//   },
//   {
//     provinceId: "COR",
//     name: "Justiniano Posse",
//   },
//   {
//     provinceId: "COR",
//     name: "Km 658",
//   },
//   {
//     provinceId: "COR",
//     name: "L. V. Mansilla",
//   },
//   {
//     provinceId: "COR",
//     name: "La Batea",
//   },
//   {
//     provinceId: "COR",
//     name: "La Calera",
//   },
//   {
//     provinceId: "COR",
//     name: "La Carlota",
//   },
//   {
//     provinceId: "COR",
//     name: "La Carolina",
//   },
//   {
//     provinceId: "COR",
//     name: "La Cautiva",
//   },
//   {
//     provinceId: "COR",
//     name: "La Cesira",
//   },
//   {
//     provinceId: "COR",
//     name: "La Cruz",
//   },
//   {
//     provinceId: "COR",
//     name: "La Cumbre",
//   },
//   {
//     provinceId: "COR",
//     name: "La Cumbrecita",
//   },
//   {
//     provinceId: "COR",
//     name: "La Falda",
//   },
//   {
//     provinceId: "COR",
//     name: "La Francia",
//   },
//   {
//     provinceId: "COR",
//     name: "La Granja",
//   },
//   {
//     provinceId: "COR",
//     name: "La Higuera",
//   },
//   {
//     provinceId: "COR",
//     name: "La Laguna",
//   },
//   {
//     provinceId: "COR",
//     name: "La Paisanita",
//   },
//   {
//     provinceId: "COR",
//     name: "La Palestina",
//   },
//   {
//     provinceId: "COR",
//     name: "12",
//   },
//   {
//     provinceId: "COR",
//     name: "La Paquita",
//   },
//   {
//     provinceId: "COR",
//     name: "La Para",
//   },
//   {
//     provinceId: "COR",
//     name: "La Paz",
//   },
//   {
//     provinceId: "COR",
//     name: "La Playa",
//   },
//   {
//     provinceId: "COR",
//     name: "La Playosa",
//   },
//   {
//     provinceId: "COR",
//     name: "La Población",
//   },
//   {
//     provinceId: "COR",
//     name: "La Posta",
//   },
//   {
//     provinceId: "COR",
//     name: "La Puerta",
//   },
//   {
//     provinceId: "COR",
//     name: "La Quinta",
//   },
//   {
//     provinceId: "COR",
//     name: "La Rancherita",
//   },
//   {
//     provinceId: "COR",
//     name: "La Rinconada",
//   },
//   {
//     provinceId: "COR",
//     name: "La Serranita",
//   },
//   {
//     provinceId: "COR",
//     name: "La Tordilla",
//   },
//   {
//     provinceId: "COR",
//     name: "Laborde",
//   },
//   {
//     provinceId: "COR",
//     name: "Laboulaye",
//   },
//   {
//     provinceId: "COR",
//     name: "Laguna Larga",
//   },
//   {
//     provinceId: "COR",
//     name: "Las Acequias",
//   },
//   {
//     provinceId: "COR",
//     name: "Las Albahacas",
//   },
//   {
//     provinceId: "COR",
//     name: "Las Arrias",
//   },
//   {
//     provinceId: "COR",
//     name: "Las Bajadas",
//   },
//   {
//     provinceId: "COR",
//     name: "Las Caleras",
//   },
//   {
//     provinceId: "COR",
//     name: "Las Calles",
//   },
//   {
//     provinceId: "COR",
//     name: "Las Cañadas",
//   },
//   {
//     provinceId: "COR",
//     name: "Las Gramillas",
//   },
//   {
//     provinceId: "COR",
//     name: "Las Higueras",
//   },
//   {
//     provinceId: "COR",
//     name: "Las Isletillas",
//   },
//   {
//     provinceId: "COR",
//     name: "Las Junturas",
//   },
//   {
//     provinceId: "COR",
//     name: "Las Palmas",
//   },
//   {
//     provinceId: "COR",
//     name: "Las Peñas",
//   },
//   {
//     provinceId: "COR",
//     name: "Las Peñas Sud",
//   },
//   {
//     provinceId: "COR",
//     name: "Las Perdices",
//   },
//   {
//     provinceId: "COR",
//     name: "Las Playas",
//   },
//   {
//     provinceId: "COR",
//     name: "Las Rabonas",
//   },
//   {
//     provinceId: "COR",
//     name: "Las Saladas",
//   },
//   {
//     provinceId: "COR",
//     name: "Las Tapias",
//   },
//   {
//     provinceId: "COR",
//     name: "Las Varas",
//   },
//   {
//     provinceId: "COR",
//     name: "Las Varillas",
//   },
//   {
//     provinceId: "COR",
//     name: "Las Vertientes",
//   },
//   {
//     provinceId: "COR",
//     name: "Leguizamón",
//   },
//   {
//     provinceId: "COR",
//     name: "Leones",
//   },
//   {
//     provinceId: "COR",
//     name: "Los Cedros",
//   },
//   {
//     provinceId: "COR",
//     name: "Los Cerrillos",
//   },
//   {
//     provinceId: "COR",
//     name: "Los Chañaritos (C.E)",
//   },
//   {
//     provinceId: "COR",
//     name: "Los Chanaritos (R.S)",
//   },
//   {
//     provinceId: "COR",
//     name: "Los Cisnes",
//   },
//   {
//     provinceId: "COR",
//     name: "Los Cocos",
//   },
//   {
//     provinceId: "COR",
//     name: "Los Cóndores",
//   },
//   {
//     provinceId: "COR",
//     name: "Los Hornillos",
//   },
//   {
//     provinceId: "COR",
//     name: "Los Hoyos",
//   },
//   {
//     provinceId: "COR",
//     name: "Los Mistoles",
//   },
//   {
//     provinceId: "COR",
//     name: "Los Molinos",
//   },
//   {
//     provinceId: "COR",
//     name: "Los Pozos",
//   },
//   {
//     provinceId: "COR",
//     name: "Los Reartes",
//   },
//   {
//     provinceId: "COR",
//     name: "Los Surgentes",
//   },
//   {
//     provinceId: "COR",
//     name: "Los Talares",
//   },
//   {
//     provinceId: "COR",
//     name: "Los Zorros",
//   },
//   {
//     provinceId: "COR",
//     name: "Lozada",
//   },
//   {
//     provinceId: "COR",
//     name: "Luca",
//   },
//   {
//     provinceId: "COR",
//     name: "Luque",
//   },
//   {
//     provinceId: "COR",
//     name: "Luyaba",
//   },
//   {
//     provinceId: "COR",
//     name: "Malagueño",
//   },
//   {
//     provinceId: "COR",
//     name: "Malena",
//   },
//   {
//     provinceId: "COR",
//     name: "Malvinas Argentinas",
//   },
//   {
//     provinceId: "COR",
//     name: "Manfredi",
//   },
//   {
//     provinceId: "COR",
//     name: "Maquinista Gallini",
//   },
//   {
//     provinceId: "COR",
//     name: "Marcos Juárez",
//   },
//   {
//     provinceId: "COR",
//     name: "Marull",
//   },
//   {
//     provinceId: "COR",
//     name: "Matorrales",
//   },
//   {
//     provinceId: "COR",
//     name: "Mattaldi",
//   },
//   {
//     provinceId: "COR",
//     name: "Mayu Sumaj",
//   },
//   {
//     provinceId: "COR",
//     name: "Media Naranja",
//   },
//   {
//     provinceId: "COR",
//     name: "Melo",
//   },
//   {
//     provinceId: "COR",
//     name: "Mendiolaza",
//   },
//   {
//     provinceId: "COR",
//     name: "Mi Granja",
//   },
//   {
//     provinceId: "COR",
//     name: "Mina Clavero",
//   },
//   {
//     provinceId: "COR",
//     name: "Miramar",
//   },
//   {
//     provinceId: "COR",
//     name: "Morrison",
//   },
//   {
//     provinceId: "COR",
//     name: "Morteros",
//   },
//   {
//     provinceId: "COR",
//     name: "Mte. Buey",
//   },
//   {
//     provinceId: "COR",
//     name: "Mte. Cristo",
//   },
//   {
//     provinceId: "COR",
//     name: "Mte. De Los Gauchos",
//   },
//   {
//     provinceId: "COR",
//     name: "Mte. Leña",
//   },
//   {
//     provinceId: "COR",
//     name: "Mte. Maíz",
//   },
//   {
//     provinceId: "COR",
//     name: "Mte. Ralo",
//   },
//   {
//     provinceId: "COR",
//     name: "Nicolás Bruzone",
//   },
//   {
//     provinceId: "COR",
//     name: "Noetinger",
//   },
//   {
//     provinceId: "COR",
//     name: "Nono",
//   },
//   {
//     provinceId: "COR",
//     name: "Nueva 7",
//   },
//   {
//     provinceId: "COR",
//     name: "Obispo Trejo",
//   },
//   {
//     provinceId: "COR",
//     name: "Olaeta",
//   },
//   {
//     provinceId: "COR",
//     name: "Oliva",
//   },
//   {
//     provinceId: "COR",
//     name: "Olivares San Nicolás",
//   },
//   {
//     provinceId: "COR",
//     name: "Onagolty",
//   },
//   {
//     provinceId: "COR",
//     name: "Oncativo",
//   },
//   {
//     provinceId: "COR",
//     name: "Ordoñez",
//   },
//   {
//     provinceId: "COR",
//     name: "Pacheco De Melo",
//   },
//   {
//     provinceId: "COR",
//     name: "Pampayasta N.",
//   },
//   {
//     provinceId: "COR",
//     name: "Pampayasta S.",
//   },
//   {
//     provinceId: "COR",
//     name: "Panaholma",
//   },
//   {
//     provinceId: "COR",
//     name: "Pascanas",
//   },
//   {
//     provinceId: "COR",
//     name: "Pasco",
//   },
//   {
//     provinceId: "COR",
//     name: "Paso del Durazno",
//   },
//   {
//     provinceId: "COR",
//     name: "Paso Viejo",
//   },
//   {
//     provinceId: "COR",
//     name: "Pilar",
//   },
//   {
//     provinceId: "COR",
//     name: "Pincén",
//   },
//   {
//     provinceId: "COR",
//     name: "Piquillín",
//   },
//   {
//     provinceId: "COR",
//     name: "Plaza de Mercedes",
//   },
//   {
//     provinceId: "COR",
//     name: "Plaza Luxardo",
//   },
//   {
//     provinceId: "COR",
//     name: "Porteña",
//   },
//   {
//     provinceId: "COR",
//     name: "Potrero de Garay",
//   },
//   {
//     provinceId: "COR",
//     name: "Pozo del Molle",
//   },
//   {
//     provinceId: "COR",
//     name: "Pozo Nuevo",
//   },
//   {
//     provinceId: "COR",
//     name: "Pueblo Italiano",
//   },
//   {
//     provinceId: "COR",
//     name: "Puesto de Castro",
//   },
//   {
//     provinceId: "COR",
//     name: "Punta del Agua",
//   },
//   {
//     provinceId: "COR",
//     name: "Quebracho Herrado",
//   },
//   {
//     provinceId: "COR",
//     name: "Quilino",
//   },
//   {
//     provinceId: "COR",
//     name: "Rafael García",
//   },
//   {
//     provinceId: "COR",
//     name: "Ranqueles",
//   },
//   {
//     provinceId: "COR",
//     name: "Rayo Cortado",
//   },
//   {
//     provinceId: "COR",
//     name: "Reducción",
//   },
//   {
//     provinceId: "COR",
//     name: "Rincón",
//   },
//   {
//     provinceId: "COR",
//     name: "Río Bamba",
//   },
//   {
//     provinceId: "COR",
//     name: "Río Ceballos",
//   },
//   {
//     provinceId: "COR",
//     name: "Río Cuarto",
//   },
//   {
//     provinceId: "COR",
//     name: "Río de Los Sauces",
//   },
//   {
//     provinceId: "COR",
//     name: "Río Primero",
//   },
//   {
//     provinceId: "COR",
//     name: "Río Segundo",
//   },
//   {
//     provinceId: "COR",
//     name: "Río Tercero",
//   },
//   {
//     provinceId: "COR",
//     name: "Rosales",
//   },
//   {
//     provinceId: "COR",
//     name: "Rosario del Saladillo",
//   },
//   {
//     provinceId: "COR",
//     name: "Sacanta",
//   },
//   {
//     provinceId: "COR",
//     name: "Sagrada Familia",
//   },
//   {
//     provinceId: "COR",
//     name: "Saira",
//   },
//   {
//     provinceId: "COR",
//     name: "Saladillo",
//   },
//   {
//     provinceId: "COR",
//     name: "Saldán",
//   },
//   {
//     provinceId: "COR",
//     name: "Salsacate",
//   },
//   {
//     provinceId: "COR",
//     name: "Salsipuedes",
//   },
//   {
//     provinceId: "COR",
//     name: "Sampacho",
//   },
//   {
//     provinceId: "COR",
//     name: "San Agustín",
//   },
//   {
//     provinceId: "COR",
//     name: "San Antonio de Arredondo",
//   },
//   {
//     provinceId: "COR",
//     name: "San Antonio de Litín",
//   },
//   {
//     provinceId: "COR",
//     name: "San Basilio",
//   },
//   {
//     provinceId: "COR",
//     name: "San Carlos Minas",
//   },
//   {
//     provinceId: "COR",
//     name: "San Clemente",
//   },
//   {
//     provinceId: "COR",
//     name: "San Esteban",
//   },
//   {
//     provinceId: "COR",
//     name: "San Francisco",
//   },
//   {
//     provinceId: "COR",
//     name: "San Ignacio",
//   },
//   {
//     provinceId: "COR",
//     name: "San Javier",
//   },
//   {
//     provinceId: "COR",
//     name: "San Jerónimo",
//   },
//   {
//     provinceId: "COR",
//     name: "San Joaquín",
//   },
//   {
//     provinceId: "COR",
//     name: "San José de La Dormida",
//   },
//   {
//     provinceId: "COR",
//     name: "San José de Las Salinas",
//   },
//   {
//     provinceId: "COR",
//     name: "San Lorenzo",
//   },
//   {
//     provinceId: "COR",
//     name: "San Marcos Sierras",
//   },
//   {
//     provinceId: "COR",
//     name: "San Marcos Sud",
//   },
//   {
//     provinceId: "COR",
//     name: "San Pedro",
//   },
//   {
//     provinceId: "COR",
//     name: "San Pedro N.",
//   },
//   {
//     provinceId: "COR",
//     name: "San Roque",
//   },
//   {
//     provinceId: "COR",
//     name: "San Vicente",
//   },
//   {
//     provinceId: "COR",
//     name: "Santa Catalina",
//   },
//   {
//     provinceId: "COR",
//     name: "Santa Elena",
//   },
//   {
//     provinceId: "COR",
//     name: "Santa Eufemia",
//   },
//   {
//     provinceId: "COR",
//     name: "Santa Maria",
//   },
//   {
//     provinceId: "COR",
//     name: "Sarmiento",
//   },
//   {
//     provinceId: "COR",
//     name: "Saturnino M.Laspiur",
//   },
//   {
//     provinceId: "COR",
//     name: "Sauce Arriba",
//   },
//   {
//     provinceId: "COR",
//     name: "Sebastián Elcano",
//   },
//   {
//     provinceId: "COR",
//     name: "Seeber",
//   },
//   {
//     provinceId: "COR",
//     name: "Segunda Usina",
//   },
//   {
//     provinceId: "COR",
//     name: "Serrano",
//   },
//   {
//     provinceId: "COR",
//     name: "Serrezuela",
//   },
//   {
//     provinceId: "COR",
//     name: "Sgo. Temple",
//   },
//   {
//     provinceId: "COR",
//     name: "Silvio Pellico",
//   },
//   {
//     provinceId: "COR",
//     name: "Simbolar",
//   },
//   {
//     provinceId: "COR",
//     name: "Sinsacate",
//   },
//   {
//     provinceId: "COR",
//     name: "Sta. Rosa de Calamuchita",
//   },
//   {
//     provinceId: "COR",
//     name: "Sta. Rosa de Río Primero",
//   },
//   {
//     provinceId: "COR",
//     name: "Suco",
//   },
//   {
//     provinceId: "COR",
//     name: "Tala Cañada",
//   },
//   {
//     provinceId: "COR",
//     name: "Tala Huasi",
//   },
//   {
//     provinceId: "COR",
//     name: "Talaini",
//   },
//   {
//     provinceId: "COR",
//     name: "Tancacha",
//   },
//   {
//     provinceId: "COR",
//     name: "Tanti",
//   },
//   {
//     provinceId: "COR",
//     name: "Ticino",
//   },
//   {
//     provinceId: "COR",
//     name: "Tinoco",
//   },
//   {
//     provinceId: "COR",
//     name: "Tío Pujio",
//   },
//   {
//     provinceId: "COR",
//     name: "Toledo",
//   },
//   {
//     provinceId: "COR",
//     name: "Toro Pujio",
//   },
//   {
//     provinceId: "COR",
//     name: "Tosno",
//   },
//   {
//     provinceId: "COR",
//     name: "Tosquita",
//   },
//   {
//     provinceId: "COR",
//     name: "Tránsito",
//   },
//   {
//     provinceId: "COR",
//     name: "Tuclame",
//   },
//   {
//     provinceId: "COR",
//     name: "Tutti",
//   },
//   {
//     provinceId: "COR",
//     name: "Ucacha",
//   },
//   {
//     provinceId: "COR",
//     name: "Unquillo",
//   },
//   {
//     provinceId: "COR",
//     name: "Valle de Anisacate",
//   },
//   {
//     provinceId: "COR",
//     name: "Valle Hermoso",
//   },
//   {
//     provinceId: "COR",
//     name: "Vélez Sarfield",
//   },
//   {
//     provinceId: "COR",
//     name: "Viamonte",
//   },
//   {
//     provinceId: "COR",
//     name: "Vicuña Mackenna",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Allende",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Amancay",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Ascasubi",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Candelaria N.",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Carlos Paz",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Cerro Azul",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Ciudad de América",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Ciudad Pque Los Reartes",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Concepción del Tío",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Cura Brochero",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa de Las Rosas",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa de María",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa de Pocho",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa de Soto",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa del Dique",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa del Prado",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa del Rosario",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa del Totoral",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Dolores",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa El Chancay",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Elisa",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Flor Serrana",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Fontana",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Giardino",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Gral. Belgrano",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Gutierrez",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Huidobro",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa La Bolsa",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Los Aromos",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Los Patos",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa María",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Nueva",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Pque. Santa Ana",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Pque. Siquiman",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Quillinzo",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Rossi",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Rumipal",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa San Esteban",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa San Isidro",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa 21",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Sarmiento (G.R)",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Sarmiento (S.A)",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Tulumba",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Valeria",
//   },
//   {
//     provinceId: "COR",
//     name: "Villa Yacanto",
//   },
//   {
//     provinceId: "COR",
//     name: "Washington",
//   },
//   {
//     provinceId: "COR",
//     name: "Wenceslao Escalante",
//   },
//   {
//     provinceId: "COR",
//     name: "Ycho Cruz Sierras",
//   },
//   {
//     provinceId: "CRR",
//     name: "Alvear",
//   },
//   {
//     provinceId: "CRR",
//     name: "Bella Vista",
//   },
//   {
//     provinceId: "CRR",
//     name: "Berón de Astrada",
//   },
//   {
//     provinceId: "CRR",
//     name: "Bonpland",
//   },
//   {
//     provinceId: "CRR",
//     name: "Caá Cati",
//   },
//   {
//     provinceId: "CRR",
//     name: "Capital",
//   },
//   {
//     provinceId: "CRR",
//     name: "Chavarría",
//   },
//   {
//     provinceId: "CRR",
//     name: "Col. C. Pellegrini",
//   },
//   {
//     provinceId: "CRR",
//     name: "Col. Libertad",
//   },
//   {
//     provinceId: "CRR",
//     name: "Col. Liebig",
//   },
//   {
//     provinceId: "CRR",
//     name: "Col. Sta Rosa",
//   },
//   {
//     provinceId: "CRR",
//     name: "Concepción",
//   },
//   {
//     provinceId: "CRR",
//     name: "Cruz de Los Milagros",
//   },
//   {
//     provinceId: "CRR",
//     name: "Curuzú-Cuatiá",
//   },
//   {
//     provinceId: "CRR",
//     name: "Empedrado",
//   },
//   {
//     provinceId: "CRR",
//     name: "Esquina",
//   },
//   {
//     provinceId: "CRR",
//     name: "Estación Torrent",
//   },
//   {
//     provinceId: "CRR",
//     name: "Felipe Yofré",
//   },
//   {
//     provinceId: "CRR",
//     name: "Garruchos",
//   },
//   {
//     provinceId: "CRR",
//     name: "Gdor. Agrónomo",
//   },
//   {
//     provinceId: "CRR",
//     name: "Gdor. Martínez",
//   },
//   {
//     provinceId: "CRR",
//     name: "Goya",
//   },
//   {
//     provinceId: "CRR",
//     name: "Guaviravi",
//   },
//   {
//     provinceId: "CRR",
//     name: "Herlitzka",
//   },
//   {
//     provinceId: "CRR",
//     name: "Ita-Ibate",
//   },
//   {
//     provinceId: "CRR",
//     name: "Itatí",
//   },
//   {
//     provinceId: "CRR",
//     name: "Ituzaingó",
//   },
//   {
//     provinceId: "CRR",
//     name: "José Rafael Gómez",
//   },
//   {
//     provinceId: "CRR",
//     name: "Juan Pujol",
//   },
//   {
//     provinceId: "CRR",
//     name: "La Cruz",
//   },
//   {
//     provinceId: "CRR",
//     name: "Lavalle",
//   },
//   {
//     provinceId: "CRR",
//     name: "Lomas de Vallejos",
//   },
//   {
//     provinceId: "CRR",
//     name: "Loreto",
//   },
//   {
//     provinceId: "CRR",
//     name: "Mariano I. Loza",
//   },
//   {
//     provinceId: "CRR",
//     name: "Mburucuyá",
//   },
//   {
//     provinceId: "CRR",
//     name: "Mercedes",
//   },
//   {
//     provinceId: "CRR",
//     name: "Mocoretá",
//   },
//   {
//     provinceId: "CRR",
//     name: "Mte. Caseros",
//   },
//   {
//     provinceId: "CRR",
//     name: "Nueve de Julio",
//   },
//   {
//     provinceId: "CRR",
//     name: "Palmar Grande",
//   },
//   {
//     provinceId: "CRR",
//     name: "Parada Pucheta",
//   },
//   {
//     provinceId: "CRR",
//     name: "Paso de La Patria",
//   },
//   {
//     provinceId: "CRR",
//     name: "Paso de Los Libres",
//   },
//   {
//     provinceId: "CRR",
//     name: "Pedro R. Fernandez",
//   },
//   {
//     provinceId: "CRR",
//     name: "Perugorría",
//   },
//   {
//     provinceId: "CRR",
//     name: "Pueblo Libertador",
//   },
//   {
//     provinceId: "CRR",
//     name: "Ramada Paso",
//   },
//   {
//     provinceId: "CRR",
//     name: "Riachuelo",
//   },
//   {
//     provinceId: "CRR",
//     name: "Saladas",
//   },
//   {
//     provinceId: "CRR",
//     name: "San Antonio",
//   },
//   {
//     provinceId: "CRR",
//     name: "San Carlos",
//   },
//   {
//     provinceId: "CRR",
//     name: "San Cosme",
//   },
//   {
//     provinceId: "CRR",
//     name: "San Lorenzo",
//   },
//   {
//     provinceId: "CRR",
//     name: "20 del Palmar",
//   },
//   {
//     provinceId: "CRR",
//     name: "San Miguel",
//   },
//   {
//     provinceId: "CRR",
//     name: "San Roque",
//   },
//   {
//     provinceId: "CRR",
//     name: "Santa Ana",
//   },
//   {
//     provinceId: "CRR",
//     name: "Santa Lucía",
//   },
//   {
//     provinceId: "CRR",
//     name: "Santo Tomé",
//   },
//   {
//     provinceId: "CRR",
//     name: "Sauce",
//   },
//   {
//     provinceId: "CRR",
//     name: "Tabay",
//   },
//   {
//     provinceId: "CRR",
//     name: "Tapebicuá",
//   },
//   {
//     provinceId: "CRR",
//     name: "Tatacua",
//   },
//   {
//     provinceId: "CRR",
//     name: "Virasoro",
//   },
//   {
//     provinceId: "CRR",
//     name: "Yapeyú",
//   },
//   {
//     provinceId: "CRR",
//     name: "Yataití Calle",
//   },
//   {
//     provinceId: "ENT",
//     name: "Alarcón",
//   },
//   {
//     provinceId: "ENT",
//     name: "Alcaraz",
//   },
//   {
//     provinceId: "ENT",
//     name: "Alcaraz N.",
//   },
//   {
//     provinceId: "ENT",
//     name: "Alcaraz S.",
//   },
//   {
//     provinceId: "ENT",
//     name: "Aldea Asunción",
//   },
//   {
//     provinceId: "ENT",
//     name: "Aldea Brasilera",
//   },
//   {
//     provinceId: "ENT",
//     name: "Aldea Elgenfeld",
//   },
//   {
//     provinceId: "ENT",
//     name: "Aldea Grapschental",
//   },
//   {
//     provinceId: "ENT",
//     name: "Aldea Ma. Luisa",
//   },
//   {
//     provinceId: "ENT",
//     name: "Aldea Protestante",
//   },
//   {
//     provinceId: "ENT",
//     name: "Aldea Salto",
//   },
//   {
//     provinceId: "ENT",
//     name: "Aldea San Antonio (G)",
//   },
//   {
//     provinceId: "ENT",
//     name: "Aldea San Antonio (P)",
//   },
//   {
//     provinceId: "ENT",
//     name: "Aldea 19",
//   },
//   {
//     provinceId: "ENT",
//     name: "Aldea San Miguel",
//   },
//   {
//     provinceId: "ENT",
//     name: "Aldea San Rafael",
//   },
//   {
//     provinceId: "ENT",
//     name: "Aldea Spatzenkutter",
//   },
//   {
//     provinceId: "ENT",
//     name: "Aldea Sta. María",
//   },
//   {
//     provinceId: "ENT",
//     name: "Aldea Sta. Rosa",
//   },
//   {
//     provinceId: "ENT",
//     name: "Aldea Valle María",
//   },
//   {
//     provinceId: "ENT",
//     name: "Altamirano Sur",
//   },
//   {
//     provinceId: "ENT",
//     name: "Antelo",
//   },
//   {
//     provinceId: "ENT",
//     name: "Antonio Tomás",
//   },
//   {
//     provinceId: "ENT",
//     name: "Aranguren",
//   },
//   {
//     provinceId: "ENT",
//     name: "Arroyo Barú",
//   },
//   {
//     provinceId: "ENT",
//     name: "Arroyo Burgos",
//   },
//   {
//     provinceId: "ENT",
//     name: "Arroyo Clé",
//   },
//   {
//     provinceId: "ENT",
//     name: "Arroyo Corralito",
//   },
//   {
//     provinceId: "ENT",
//     name: "Arroyo del Medio",
//   },
//   {
//     provinceId: "ENT",
//     name: "Arroyo Maturrango",
//   },
//   {
//     provinceId: "ENT",
//     name: "Arroyo Palo Seco",
//   },
//   {
//     provinceId: "ENT",
//     name: "Banderas",
//   },
//   {
//     provinceId: "ENT",
//     name: "Basavilbaso",
//   },
//   {
//     provinceId: "ENT",
//     name: "Betbeder",
//   },
//   {
//     provinceId: "ENT",
//     name: "Bovril",
//   },
//   {
//     provinceId: "ENT",
//     name: "Caseros",
//   },
//   {
//     provinceId: "ENT",
//     name: "Ceibas",
//   },
//   {
//     provinceId: "ENT",
//     name: "Cerrito",
//   },
//   {
//     provinceId: "ENT",
//     name: "Chajarí",
//   },
//   {
//     provinceId: "ENT",
//     name: "Chilcas",
//   },
//   {
//     provinceId: "ENT",
//     name: "Clodomiro Ledesma",
//   },
//   {
//     provinceId: "ENT",
//     name: "Col. Alemana",
//   },
//   {
//     provinceId: "ENT",
//     name: "Col. Avellaneda",
//   },
//   {
//     provinceId: "ENT",
//     name: "Col. Avigdor",
//   },
//   {
//     provinceId: "ENT",
//     name: "Col. Ayuí",
//   },
//   {
//     provinceId: "ENT",
//     name: "Col. Baylina",
//   },
//   {
//     provinceId: "ENT",
//     name: "Col. Carrasco",
//   },
//   {
//     provinceId: "ENT",
//     name: "Col. Celina",
//   },
//   {
//     provinceId: "ENT",
//     name: "Col. Cerrito",
//   },
//   {
//     provinceId: "ENT",
//     name: "Col. Crespo",
//   },
//   {
//     provinceId: "ENT",
//     name: "Col. Elia",
//   },
//   {
//     provinceId: "ENT",
//     name: "Col. Ensayo",
//   },
//   {
//     provinceId: "ENT",
//     name: "Col. Gral. Roca",
//   },
//   {
//     provinceId: "ENT",
//     name: "Col. La Argentina",
//   },
//   {
//     provinceId: "ENT",
//     name: "Col. Merou",
//   },
//   {
//     provinceId: "ENT",
//     name: "Col. Oficial Nª3",
//   },
//   {
//     provinceId: "ENT",
//     name: "Col. Oficial Nº13",
//   },
//   {
//     provinceId: "ENT",
//     name: "Col. Oficial Nº14",
//   },
//   {
//     provinceId: "ENT",
//     name: "Col. Oficial Nº5",
//   },
//   {
//     provinceId: "ENT",
//     name: "Col. Reffino",
//   },
//   {
//     provinceId: "ENT",
//     name: "Col. Tunas",
//   },
//   {
//     provinceId: "ENT",
//     name: "Col. Viraró",
//   },
//   {
//     provinceId: "ENT",
//     name: "Colón",
//   },
//   {
//     provinceId: "ENT",
//     name: "Concepción del Uruguay",
//   },
//   {
//     provinceId: "ENT",
//     name: "Concordia",
//   },
//   {
//     provinceId: "ENT",
//     name: "Conscripto Bernardi",
//   },
//   {
//     provinceId: "ENT",
//     name: "Costa Grande",
//   },
//   {
//     provinceId: "ENT",
//     name: "Costa San Antonio",
//   },
//   {
//     provinceId: "ENT",
//     name: "Costa Uruguay N.",
//   },
//   {
//     provinceId: "ENT",
//     name: "Costa Uruguay S.",
//   },
//   {
//     provinceId: "ENT",
//     name: "Crespo",
//   },
//   {
//     provinceId: "ENT",
//     name: "Crucecitas 3ª",
//   },
//   {
//     provinceId: "ENT",
//     name: "Crucecitas 7ª",
//   },
//   {
//     provinceId: "ENT",
//     name: "Crucecitas 8ª",
//   },
//   {
//     provinceId: "ENT",
//     name: "Cuchilla Redonda",
//   },
//   {
//     provinceId: "ENT",
//     name: "Curtiembre",
//   },
//   {
//     provinceId: "ENT",
//     name: "Diamante",
//   },
//   {
//     provinceId: "ENT",
//     name: "Distrito 6º",
//   },
//   {
//     provinceId: "ENT",
//     name: "Distrito Chañar",
//   },
//   {
//     provinceId: "ENT",
//     name: "Distrito Chiqueros",
//   },
//   {
//     provinceId: "ENT",
//     name: "Distrito Cuarto",
//   },
//   {
//     provinceId: "ENT",
//     name: "Distrito Diego López",
//   },
//   {
//     provinceId: "ENT",
//     name: "Distrito Pajonal",
//   },
//   {
//     provinceId: "ENT",
//     name: "Distrito Sauce",
//   },
//   {
//     provinceId: "ENT",
//     name: "Distrito Tala",
//   },
//   {
//     provinceId: "ENT",
//     name: "Distrito Talitas",
//   },
//   {
//     provinceId: "ENT",
//     name: "Don Cristóbal 1ª Sección",
//   },
//   {
//     provinceId: "ENT",
//     name: "Don Cristóbal 2ª Sección",
//   },
//   {
//     provinceId: "ENT",
//     name: "Durazno",
//   },
//   {
//     provinceId: "ENT",
//     name: "El Cimarrón",
//   },
//   {
//     provinceId: "ENT",
//     name: "El Gramillal",
//   },
//   {
//     provinceId: "ENT",
//     name: "El Palenque",
//   },
//   {
//     provinceId: "ENT",
//     name: "El Pingo",
//   },
//   {
//     provinceId: "ENT",
//     name: "El Quebracho",
//   },
//   {
//     provinceId: "ENT",
//     name: "El Redomón",
//   },
//   {
//     provinceId: "ENT",
//     name: "El Solar",
//   },
//   {
//     provinceId: "ENT",
//     name: "Enrique Carbo",
//   },
//   {
//     provinceId: "ENT",
//     name: "9",
//   },
//   {
//     provinceId: "ENT",
//     name: "Espinillo N.",
//   },
//   {
//     provinceId: "ENT",
//     name: "Estación Campos",
//   },
//   {
//     provinceId: "ENT",
//     name: "Estación Escriña",
//   },
//   {
//     provinceId: "ENT",
//     name: "Estación Lazo",
//   },
//   {
//     provinceId: "ENT",
//     name: "Estación Raíces",
//   },
//   {
//     provinceId: "ENT",
//     name: "Estación Yerúa",
//   },
//   {
//     provinceId: "ENT",
//     name: "Estancia Grande",
//   },
//   {
//     provinceId: "ENT",
//     name: "Estancia Líbaros",
//   },
//   {
//     provinceId: "ENT",
//     name: "Estancia Racedo",
//   },
//   {
//     provinceId: "ENT",
//     name: "Estancia Solá",
//   },
//   {
//     provinceId: "ENT",
//     name: "Estancia Yuquerí",
//   },
//   {
//     provinceId: "ENT",
//     name: "Estaquitas",
//   },
//   {
//     provinceId: "ENT",
//     name: "Faustino M. Parera",
//   },
//   {
//     provinceId: "ENT",
//     name: "Febre",
//   },
//   {
//     provinceId: "ENT",
//     name: "Federación",
//   },
//   {
//     provinceId: "ENT",
//     name: "Federal",
//   },
//   {
//     provinceId: "ENT",
//     name: "Gdor. Echagüe",
//   },
//   {
//     provinceId: "ENT",
//     name: "Gdor. Mansilla",
//   },
//   {
//     provinceId: "ENT",
//     name: "Gilbert",
//   },
//   {
//     provinceId: "ENT",
//     name: "González Calderón",
//   },
//   {
//     provinceId: "ENT",
//     name: "Gral. Almada",
//   },
//   {
//     provinceId: "ENT",
//     name: "Gral. Alvear",
//   },
//   {
//     provinceId: "ENT",
//     name: "Gral. Campos",
//   },
//   {
//     provinceId: "ENT",
//     name: "Gral. Galarza",
//   },
//   {
//     provinceId: "ENT",
//     name: "Gral. Ramírez",
//   },
//   {
//     provinceId: "ENT",
//     name: "Gualeguay",
//   },
//   {
//     provinceId: "ENT",
//     name: "Gualeguaychú",
//   },
//   {
//     provinceId: "ENT",
//     name: "Gualeguaycito",
//   },
//   {
//     provinceId: "ENT",
//     name: "Guardamonte",
//   },
//   {
//     provinceId: "ENT",
//     name: "Hambis",
//   },
//   {
//     provinceId: "ENT",
//     name: "Hasenkamp",
//   },
//   {
//     provinceId: "ENT",
//     name: "Hernandarias",
//   },
//   {
//     provinceId: "ENT",
//     name: "Hernández",
//   },
//   {
//     provinceId: "ENT",
//     name: "Herrera",
//   },
//   {
//     provinceId: "ENT",
//     name: "Hinojal",
//   },
//   {
//     provinceId: "ENT",
//     name: "Hocker",
//   },
//   {
//     provinceId: "ENT",
//     name: "Ing. Sajaroff",
//   },
//   {
//     provinceId: "ENT",
//     name: "Irazusta",
//   },
//   {
//     provinceId: "ENT",
//     name: "Isletas",
//   },
//   {
//     provinceId: "ENT",
//     name: "J.J De Urquiza",
//   },
//   {
//     provinceId: "ENT",
//     name: "Jubileo",
//   },
//   {
//     provinceId: "ENT",
//     name: "La Clarita",
//   },
//   {
//     provinceId: "ENT",
//     name: "La Criolla",
//   },
//   {
//     provinceId: "ENT",
//     name: "La Esmeralda",
//   },
//   {
//     provinceId: "ENT",
//     name: "La Florida",
//   },
//   {
//     provinceId: "ENT",
//     name: "La Fraternidad",
//   },
//   {
//     provinceId: "ENT",
//     name: "La Hierra",
//   },
//   {
//     provinceId: "ENT",
//     name: "La Ollita",
//   },
//   {
//     provinceId: "ENT",
//     name: "La Paz",
//   },
//   {
//     provinceId: "ENT",
//     name: "La Picada",
//   },
//   {
//     provinceId: "ENT",
//     name: "La Providencia",
//   },
//   {
//     provinceId: "ENT",
//     name: "La Verbena",
//   },
//   {
//     provinceId: "ENT",
//     name: "Laguna Benítez",
//   },
//   {
//     provinceId: "ENT",
//     name: "Larroque",
//   },
//   {
//     provinceId: "ENT",
//     name: "Las Cuevas",
//   },
//   {
//     provinceId: "ENT",
//     name: "Las Garzas",
//   },
//   {
//     provinceId: "ENT",
//     name: "Las Guachas",
//   },
//   {
//     provinceId: "ENT",
//     name: "Las Mercedes",
//   },
//   {
//     provinceId: "ENT",
//     name: "Las Moscas",
//   },
//   {
//     provinceId: "ENT",
//     name: "Las Mulitas",
//   },
//   {
//     provinceId: "ENT",
//     name: "Las Toscas",
//   },
//   {
//     provinceId: "ENT",
//     name: "Laurencena",
//   },
//   {
//     provinceId: "ENT",
//     name: "Libertador San Martín",
//   },
//   {
//     provinceId: "ENT",
//     name: "Loma Limpia",
//   },
//   {
//     provinceId: "ENT",
//     name: "Los Ceibos",
//   },
//   {
//     provinceId: "ENT",
//     name: "Los Charruas",
//   },
//   {
//     provinceId: "ENT",
//     name: "Los Conquistadores",
//   },
//   {
//     provinceId: "ENT",
//     name: "Lucas González",
//   },
//   {
//     provinceId: "ENT",
//     name: "Lucas N.",
//   },
//   {
//     provinceId: "ENT",
//     name: "Lucas S. 1ª",
//   },
//   {
//     provinceId: "ENT",
//     name: "Lucas S. 2ª",
//   },
//   {
//     provinceId: "ENT",
//     name: "Maciá",
//   },
//   {
//     provinceId: "ENT",
//     name: "María Grande",
//   },
//   {
//     provinceId: "ENT",
//     name: "María Grande 2ª",
//   },
//   {
//     provinceId: "ENT",
//     name: "Médanos",
//   },
//   {
//     provinceId: "ENT",
//     name: "Mojones N.",
//   },
//   {
//     provinceId: "ENT",
//     name: "Mojones S.",
//   },
//   {
//     provinceId: "ENT",
//     name: "Molino Doll",
//   },
//   {
//     provinceId: "ENT",
//     name: "Monte Redondo",
//   },
//   {
//     provinceId: "ENT",
//     name: "Montoya",
//   },
//   {
//     provinceId: "ENT",
//     name: "Mulas Grandes",
//   },
//   {
//     provinceId: "ENT",
//     name: "Ñancay",
//   },
//   {
//     provinceId: "ENT",
//     name: "Nogoyá",
//   },
//   {
//     provinceId: "ENT",
//     name: "Nueva Escocia",
//   },
//   {
//     provinceId: "ENT",
//     name: "Nueva Vizcaya",
//   },
//   {
//     provinceId: "ENT",
//     name: "Ombú",
//   },
//   {
//     provinceId: "ENT",
//     name: "Oro Verde",
//   },
//   {
//     provinceId: "ENT",
//     name: "Paraná",
//   },
//   {
//     provinceId: "ENT",
//     name: "Pasaje Guayaquil",
//   },
//   {
//     provinceId: "ENT",
//     name: "Pasaje Las Tunas",
//   },
//   {
//     provinceId: "ENT",
//     name: "Paso de La Arena",
//   },
//   {
//     provinceId: "ENT",
//     name: "Paso de La Laguna",
//   },
//   {
//     provinceId: "ENT",
//     name: "Paso de Las Piedras",
//   },
//   {
//     provinceId: "ENT",
//     name: "Paso Duarte",
//   },
//   {
//     provinceId: "ENT",
//     name: "Pastor Britos",
//   },
//   {
//     provinceId: "ENT",
//     name: "Pedernal",
//   },
//   {
//     provinceId: "ENT",
//     name: "Perdices",
//   },
//   {
//     provinceId: "ENT",
//     name: "Picada Berón",
//   },
//   {
//     provinceId: "ENT",
//     name: "Piedras Blancas",
//   },
//   {
//     provinceId: "ENT",
//     name: "Primer Distrito Cuchilla",
//   },
//   {
//     provinceId: "ENT",
//     name: "Primero de Mayo",
//   },
//   {
//     provinceId: "ENT",
//     name: "Pronunciamiento",
//   },
//   {
//     provinceId: "ENT",
//     name: "Pto. Algarrobo",
//   },
//   {
//     provinceId: "ENT",
//     name: "Pto. Ibicuy",
//   },
//   {
//     provinceId: "ENT",
//     name: "Pueblo Brugo",
//   },
//   {
//     provinceId: "ENT",
//     name: "Pueblo Cazes",
//   },
//   {
//     provinceId: "ENT",
//     name: "Pueblo Gral. Belgrano",
//   },
//   {
//     provinceId: "ENT",
//     name: "Pueblo Liebig",
//   },
//   {
//     provinceId: "ENT",
//     name: "Puerto Yeruá",
//   },
//   {
//     provinceId: "ENT",
//     name: "Punta del Monte",
//   },
//   {
//     provinceId: "ENT",
//     name: "Quebracho",
//   },
//   {
//     provinceId: "ENT",
//     name: "Quinto Distrito",
//   },
//   {
//     provinceId: "ENT",
//     name: "Raices Oeste",
//   },
//   {
//     provinceId: "ENT",
//     name: "Rincón de Nogoyá",
//   },
//   {
//     provinceId: "ENT",
//     name: "Rincón del Cinto",
//   },
//   {
//     provinceId: "ENT",
//     name: "Rincón del Doll",
//   },
//   {
//     provinceId: "ENT",
//     name: "Rincón del Gato",
//   },
//   {
//     provinceId: "ENT",
//     name: "Rocamora",
//   },
//   {
//     provinceId: "ENT",
//     name: "Rosario del Tala",
//   },
//   {
//     provinceId: "ENT",
//     name: "San Benito",
//   },
//   {
//     provinceId: "ENT",
//     name: "San Cipriano",
//   },
//   {
//     provinceId: "ENT",
//     name: "San Ernesto",
//   },
//   {
//     provinceId: "ENT",
//     name: "San Gustavo",
//   },
//   {
//     provinceId: "ENT",
//     name: "San Jaime",
//   },
//   {
//     provinceId: "ENT",
//     name: "San José",
//   },
//   {
//     provinceId: "ENT",
//     name: "San José de Feliciano",
//   },
//   {
//     provinceId: "ENT",
//     name: "San Justo",
//   },
//   {
//     provinceId: "ENT",
//     name: "San Marcial",
//   },
//   {
//     provinceId: "ENT",
//     name: "San Pedro",
//   },
//   {
//     provinceId: "ENT",
//     name: "San Ramírez",
//   },
//   {
//     provinceId: "ENT",
//     name: "San Ramón",
//   },
//   {
//     provinceId: "ENT",
//     name: "San Roque",
//   },
//   {
//     provinceId: "ENT",
//     name: "San Salvador",
//   },
//   {
//     provinceId: "ENT",
//     name: "San Víctor",
//   },
//   {
//     provinceId: "ENT",
//     name: "Santa Ana",
//   },
//   {
//     provinceId: "ENT",
//     name: "Santa Anita",
//   },
//   {
//     provinceId: "ENT",
//     name: "Santa Elena",
//   },
//   {
//     provinceId: "ENT",
//     name: "Santa Lucía",
//   },
//   {
//     provinceId: "ENT",
//     name: "Santa Luisa",
//   },
//   {
//     provinceId: "ENT",
//     name: "Sauce de Luna",
//   },
//   {
//     provinceId: "ENT",
//     name: "Sauce Montrull",
//   },
//   {
//     provinceId: "ENT",
//     name: "Sauce Pinto",
//   },
//   {
//     provinceId: "ENT",
//     name: "Sauce Sur",
//   },
//   {
//     provinceId: "ENT",
//     name: "Seguí",
//   },
//   {
//     provinceId: "ENT",
//     name: "Sir Leonard",
//   },
//   {
//     provinceId: "ENT",
//     name: "Sosa",
//   },
//   {
//     provinceId: "ENT",
//     name: "Tabossi",
//   },
//   {
//     provinceId: "ENT",
//     name: "Tezanos Pinto",
//   },
//   {
//     provinceId: "ENT",
//     name: "Ubajay",
//   },
//   {
//     provinceId: "ENT",
//     name: "Urdinarrain",
//   },
//   {
//     provinceId: "ENT",
//     name: "Veinte de Septiembre",
//   },
//   {
//     provinceId: "ENT",
//     name: "Viale",
//   },
//   {
//     provinceId: "ENT",
//     name: "Victoria",
//   },
//   {
//     provinceId: "ENT",
//     name: "Villa Clara",
//   },
//   {
//     provinceId: "ENT",
//     name: "Villa del Rosario",
//   },
//   {
//     provinceId: "ENT",
//     name: "Villa Domínguez",
//   },
//   {
//     provinceId: "ENT",
//     name: "Villa Elisa",
//   },
//   {
//     provinceId: "ENT",
//     name: "Villa Fontana",
//   },
//   {
//     provinceId: "ENT",
//     name: "Villa Gdor. Etchevehere",
//   },
//   {
//     provinceId: "ENT",
//     name: "Villa Mantero",
//   },
//   {
//     provinceId: "ENT",
//     name: "Villa Paranacito",
//   },
//   {
//     provinceId: "ENT",
//     name: "Villa Urquiza",
//   },
//   {
//     provinceId: "ENT",
//     name: "Villaguay",
//   },
//   {
//     provinceId: "ENT",
//     name: "Walter Moss",
//   },
//   {
//     provinceId: "ENT",
//     name: "Yacaré",
//   },
//   {
//     provinceId: "ENT",
//     name: "Yeso Oeste",
//   },
//   {
//     provinceId: "FOR",
//     name: "Buena Vista",
//   },
//   {
//     provinceId: "FOR",
//     name: "Clorinda",
//   },
//   {
//     provinceId: "FOR",
//     name: "Col. Pastoril",
//   },
//   {
//     provinceId: "FOR",
//     name: "Cte. Fontana",
//   },
//   {
//     provinceId: "FOR",
//     name: "El Colorado",
//   },
//   {
//     provinceId: "FOR",
//     name: "El Espinillo",
//   },
//   {
//     provinceId: "FOR",
//     name: "Estanislao Del Campo",
//   },
//   {
//     provinceId: "FOR",
//     name: "10",
//   },
//   {
//     provinceId: "FOR",
//     name: "Fortín Lugones",
//   },
//   {
//     provinceId: "FOR",
//     name: "Gral. Lucio V. Mansilla",
//   },
//   {
//     provinceId: "FOR",
//     name: "Gral. Manuel Belgrano",
//   },
//   {
//     provinceId: "FOR",
//     name: "Gral. Mosconi",
//   },
//   {
//     provinceId: "FOR",
//     name: "Gran Guardia",
//   },
//   {
//     provinceId: "FOR",
//     name: "Herradura",
//   },
//   {
//     provinceId: "FOR",
//     name: "Ibarreta",
//   },
//   {
//     provinceId: "FOR",
//     name: "Ing. Juárez",
//   },
//   {
//     provinceId: "FOR",
//     name: "Laguna Blanca",
//   },
//   {
//     provinceId: "FOR",
//     name: "Laguna Naick Neck",
//   },
//   {
//     provinceId: "FOR",
//     name: "Laguna Yema",
//   },
//   {
//     provinceId: "FOR",
//     name: "Las Lomitas",
//   },
//   {
//     provinceId: "FOR",
//     name: "Los Chiriguanos",
//   },
//   {
//     provinceId: "FOR",
//     name: "Mayor V. Villafañe",
//   },
//   {
//     provinceId: "FOR",
//     name: "Misión San Fco.",
//   },
//   {
//     provinceId: "FOR",
//     name: "Palo Santo",
//   },
//   {
//     provinceId: "FOR",
//     name: "Pirané",
//   },
//   {
//     provinceId: "FOR",
//     name: "Pozo del Maza",
//   },
//   {
//     provinceId: "FOR",
//     name: "Riacho He-He",
//   },
//   {
//     provinceId: "FOR",
//     name: "San Hilario",
//   },
//   {
//     provinceId: "FOR",
//     name: "San Martín II",
//   },
//   {
//     provinceId: "FOR",
//     name: "Siete Palmas",
//   },
//   {
//     provinceId: "FOR",
//     name: "Subteniente Perín",
//   },
//   {
//     provinceId: "FOR",
//     name: "Tres Lagunas",
//   },
//   {
//     provinceId: "FOR",
//     name: "Villa Dos Trece",
//   },
//   {
//     provinceId: "FOR",
//     name: "Villa Escolar",
//   },
//   {
//     provinceId: "FOR",
//     name: "Villa Gral. Güemes",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Abdon Castro Tolay",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Abra Pampa",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Abralaite",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Aguas Calientes",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Arrayanal",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Barrios",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Caimancito",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Calilegua",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Cangrejillos",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Caspala",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Catuá",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Cieneguillas",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Coranzulli",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Cusi-Cusi",
//   },
//   {
//     provinceId: "JUJ",
//     name: "El Aguilar",
//   },
//   {
//     provinceId: "JUJ",
//     name: "El Carmen",
//   },
//   {
//     provinceId: "JUJ",
//     name: "El Cóndor",
//   },
//   {
//     provinceId: "JUJ",
//     name: "El Fuerte",
//   },
//   {
//     provinceId: "JUJ",
//     name: "El Piquete",
//   },
//   {
//     provinceId: "JUJ",
//     name: "El Talar",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Fraile Pintado",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Hipólito Yrigoyen",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Huacalera",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Humahuaca",
//   },
//   {
//     provinceId: "JUJ",
//     name: "La Esperanza",
//   },
//   {
//     provinceId: "JUJ",
//     name: "La Mendieta",
//   },
//   {
//     provinceId: "JUJ",
//     name: "La Quiaca",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Ledesma",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Libertador Gral. San Martin",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Maimara",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Mina Pirquitas",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Monterrico",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Palma Sola",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Palpalá",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Pampa Blanca",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Pampichuela",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Perico",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Puesto del Marqués",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Puesto Viejo",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Pumahuasi",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Purmamarca",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Rinconada",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Rodeitos",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Rosario de Río Grande",
//   },
//   {
//     provinceId: "JUJ",
//     name: "San Antonio",
//   },
//   {
//     provinceId: "JUJ",
//     name: "San Francisco",
//   },
//   {
//     provinceId: "JUJ",
//     name: "San Pedro",
//   },
//   {
//     provinceId: "JUJ",
//     name: "San Rafael",
//   },
//   {
//     provinceId: "JUJ",
//     name: "San Salvador",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Santa Ana",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Santa Catalina",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Santa Clara",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Susques",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Tilcara",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Tres Cruces",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Tumbaya",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Valle Grande",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Vinalito",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Volcán",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Yala",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Yaví",
//   },
//   {
//     provinceId: "JUJ",
//     name: "Yuto",
//   },
//   {
//     provinceId: "PAM",
//     name: "Abramo",
//   },
//   {
//     provinceId: "PAM",
//     name: "Adolfo Van Praet",
//   },
//   {
//     provinceId: "PAM",
//     name: "Agustoni",
//   },
//   {
//     provinceId: "PAM",
//     name: "Algarrobo del Aguila",
//   },
//   {
//     provinceId: "PAM",
//     name: "Alpachiri",
//   },
//   {
//     provinceId: "PAM",
//     name: "Alta Italia",
//   },
//   {
//     provinceId: "PAM",
//     name: "Anguil",
//   },
//   {
//     provinceId: "PAM",
//     name: "Arata",
//   },
//   {
//     provinceId: "PAM",
//     name: "Ataliva Roca",
//   },
//   {
//     provinceId: "PAM",
//     name: "Bernardo Larroude",
//   },
//   {
//     provinceId: "PAM",
//     name: "Bernasconi",
//   },
//   {
//     provinceId: "PAM",
//     name: "Caleufú",
//   },
//   {
//     provinceId: "PAM",
//     name: "Carro Quemado",
//   },
//   {
//     provinceId: "PAM",
//     name: "Catriló",
//   },
//   {
//     provinceId: "PAM",
//     name: "Ceballos",
//   },
//   {
//     provinceId: "PAM",
//     name: "Chacharramendi",
//   },
//   {
//     provinceId: "PAM",
//     name: "Col. Barón",
//   },
//   {
//     provinceId: "PAM",
//     name: "Col. Santa María",
//   },
//   {
//     provinceId: "PAM",
//     name: "Conhelo",
//   },
//   {
//     provinceId: "PAM",
//     name: "Coronel Hilario Lagos",
//   },
//   {
//     provinceId: "PAM",
//     name: "Cuchillo-Có",
//   },
//   {
//     provinceId: "PAM",
//     name: "Doblas",
//   },
//   {
//     provinceId: "PAM",
//     name: "Dorila",
//   },
//   {
//     provinceId: "PAM",
//     name: "Eduardo Castex",
//   },
//   {
//     provinceId: "PAM",
//     name: "Embajador Martini",
//   },
//   {
//     provinceId: "PAM",
//     name: "Falucho",
//   },
//   {
//     provinceId: "PAM",
//     name: "Gral. Acha",
//   },
//   {
//     provinceId: "PAM",
//     name: "Gral. Manuel Campos",
//   },
//   {
//     provinceId: "PAM",
//     name: "Gral. Pico",
//   },
//   {
//     provinceId: "PAM",
//     name: "Guatraché",
//   },
//   {
//     provinceId: "PAM",
//     name: "Ing. Luiggi",
//   },
//   {
//     provinceId: "PAM",
//     name: "Intendente Alvear",
//   },
//   {
//     provinceId: "PAM",
//     name: "Jacinto Arauz",
//   },
//   {
//     provinceId: "PAM",
//     name: "La Adela",
//   },
//   {
//     provinceId: "PAM",
//     name: "La Humada",
//   },
//   {
//     provinceId: "PAM",
//     name: "La Maruja",
//   },
//   {
//     provinceId: "PAM",
//     name: "12",
//   },
//   {
//     provinceId: "PAM",
//     name: "La Reforma",
//   },
//   {
//     provinceId: "PAM",
//     name: "Limay Mahuida",
//   },
//   {
//     provinceId: "PAM",
//     name: "Lonquimay",
//   },
//   {
//     provinceId: "PAM",
//     name: "Loventuel",
//   },
//   {
//     provinceId: "PAM",
//     name: "Luan Toro",
//   },
//   {
//     provinceId: "PAM",
//     name: "Macachín",
//   },
//   {
//     provinceId: "PAM",
//     name: "Maisonnave",
//   },
//   {
//     provinceId: "PAM",
//     name: "Mauricio Mayer",
//   },
//   {
//     provinceId: "PAM",
//     name: "Metileo",
//   },
//   {
//     provinceId: "PAM",
//     name: "Miguel Cané",
//   },
//   {
//     provinceId: "PAM",
//     name: "Miguel Riglos",
//   },
//   {
//     provinceId: "PAM",
//     name: "Monte Nievas",
//   },
//   {
//     provinceId: "PAM",
//     name: "Parera",
//   },
//   {
//     provinceId: "PAM",
//     name: "Perú",
//   },
//   {
//     provinceId: "PAM",
//     name: "Pichi-Huinca",
//   },
//   {
//     provinceId: "PAM",
//     name: "Puelches",
//   },
//   {
//     provinceId: "PAM",
//     name: "Puelén",
//   },
//   {
//     provinceId: "PAM",
//     name: "Quehue",
//   },
//   {
//     provinceId: "PAM",
//     name: "Quemú Quemú",
//   },
//   {
//     provinceId: "PAM",
//     name: "Quetrequén",
//   },
//   {
//     provinceId: "PAM",
//     name: "Rancul",
//   },
//   {
//     provinceId: "PAM",
//     name: "Realicó",
//   },
//   {
//     provinceId: "PAM",
//     name: "Relmo",
//   },
//   {
//     provinceId: "PAM",
//     name: "Rolón",
//   },
//   {
//     provinceId: "PAM",
//     name: "Rucanelo",
//   },
//   {
//     provinceId: "PAM",
//     name: "Sarah",
//   },
//   {
//     provinceId: "PAM",
//     name: "Speluzzi",
//   },
//   {
//     provinceId: "PAM",
//     name: "Sta. Isabel",
//   },
//   {
//     provinceId: "PAM",
//     name: "Sta. Rosa",
//   },
//   {
//     provinceId: "PAM",
//     name: "Sta. Teresa",
//   },
//   {
//     provinceId: "PAM",
//     name: "Telén",
//   },
//   {
//     provinceId: "PAM",
//     name: "Toay",
//   },
//   {
//     provinceId: "PAM",
//     name: "Tomas M. de Anchorena",
//   },
//   {
//     provinceId: "PAM",
//     name: "Trenel",
//   },
//   {
//     provinceId: "PAM",
//     name: "Unanue",
//   },
//   {
//     provinceId: "PAM",
//     name: "Uriburu",
//   },
//   {
//     provinceId: "PAM",
//     name: "Veinticinco de Mayo",
//   },
//   {
//     provinceId: "PAM",
//     name: "Vertiz",
//   },
//   {
//     provinceId: "PAM",
//     name: "Victorica",
//   },
//   {
//     provinceId: "PAM",
//     name: "Villa Mirasol",
//   },
//   {
//     provinceId: "PAM",
//     name: "Winifreda",
//   },
//   {
//     provinceId: "RIO",
//     name: "Arauco",
//   },
//   {
//     provinceId: "RIO",
//     name: "Capital",
//   },
//   {
//     provinceId: "RIO",
//     name: "Castro Barros",
//   },
//   {
//     provinceId: "RIO",
//     name: "Chamical",
//   },
//   {
//     provinceId: "RIO",
//     name: "Chilecito",
//   },
//   {
//     provinceId: "RIO",
//     name: "Coronel F. Varela",
//   },
//   {
//     provinceId: "RIO",
//     name: "Famatina",
//   },
//   {
//     provinceId: "RIO",
//     name: "Gral. A.V.Peñaloza",
//   },
//   {
//     provinceId: "RIO",
//     name: "Gral. Belgrano",
//   },
//   {
//     provinceId: "RIO",
//     name: "Gral. J.F. Quiroga",
//   },
//   {
//     provinceId: "RIO",
//     name: "Gral. Lamadrid",
//   },
//   {
//     provinceId: "RIO",
//     name: "Gral. Ocampo",
//   },
//   {
//     provinceId: "RIO",
//     name: "Gral. San Martín",
//   },
//   {
//     provinceId: "RIO",
//     name: "Independencia",
//   },
//   {
//     provinceId: "RIO",
//     name: "Rosario Penaloza",
//   },
//   {
//     provinceId: "RIO",
//     name: "San Blas de Los Sauces",
//   },
//   {
//     provinceId: "RIO",
//     name: "Sanagasta",
//   },
//   {
//     provinceId: "RIO",
//     name: "Vinchina",
//   },
//   {
//     provinceId: "MEN",
//     name: "Capital",
//   },
//   {
//     provinceId: "MEN",
//     name: "Chacras de Coria",
//   },
//   {
//     provinceId: "MEN",
//     name: "Dorrego",
//   },
//   {
//     provinceId: "MEN",
//     name: "Gllen",
//   },
//   {
//     provinceId: "MEN",
//     name: "Godoy Cruz",
//   },
//   {
//     provinceId: "MEN",
//     name: "Gral. Alvear",
//   },
//   {
//     provinceId: "MEN",
//     name: "Guaymallén",
//   },
//   {
//     provinceId: "MEN",
//     name: "Junín",
//   },
//   {
//     provinceId: "MEN",
//     name: "La Paz",
//   },
//   {
//     provinceId: "MEN",
//     name: "Las Heras",
//   },
//   {
//     provinceId: "MEN",
//     name: "Lavalle",
//   },
//   {
//     provinceId: "MEN",
//     name: "Luján",
//   },
//   {
//     provinceId: "MEN",
//     name: "Luján De Cuyo",
//   },
//   {
//     provinceId: "MEN",
//     name: "Maipú",
//   },
//   {
//     provinceId: "MEN",
//     name: "Malargüe",
//   },
//   {
//     provinceId: "MEN",
//     name: "Rivadavia",
//   },
//   {
//     provinceId: "MEN",
//     name: "San Carlos",
//   },
//   {
//     provinceId: "MEN",
//     name: "San Martín",
//   },
//   {
//     provinceId: "MEN",
//     name: "San Rafael",
//   },
//   {
//     provinceId: "MEN",
//     name: "Sta. Rosa",
//   },
//   {
//     provinceId: "MEN",
//     name: "Tunuyán",
//   },
//   {
//     provinceId: "MEN",
//     name: "Tupungato",
//   },
//   {
//     provinceId: "MEN",
//     name: "Villa Nueva",
//   },
//   {
//     provinceId: "MIS",
//     name: "Alba Posse",
//   },
//   {
//     provinceId: "MIS",
//     name: "Almafuerte",
//   },
//   {
//     provinceId: "MIS",
//     name: "Apóstoles",
//   },
//   {
//     provinceId: "MIS",
//     name: "Aristóbulo Del Valle",
//   },
//   {
//     provinceId: "MIS",
//     name: "Arroyo Del Medio",
//   },
//   {
//     provinceId: "MIS",
//     name: "Azara",
//   },
//   {
//     provinceId: "MIS",
//     name: "Bdo. De Irigoyen",
//   },
//   {
//     provinceId: "MIS",
//     name: "Bonpland",
//   },
//   {
//     provinceId: "MIS",
//     name: "Caá Yari",
//   },
//   {
//     provinceId: "MIS",
//     name: "Campo Grande",
//   },
//   {
//     provinceId: "MIS",
//     name: "Campo Ramón",
//   },
//   {
//     provinceId: "MIS",
//     name: "Campo Viera",
//   },
//   {
//     provinceId: "MIS",
//     name: "Candelaria",
//   },
//   {
//     provinceId: "MIS",
//     name: "Capioví",
//   },
//   {
//     provinceId: "MIS",
//     name: "Caraguatay",
//   },
//   {
//     provinceId: "MIS",
//     name: "Cdte. Guacurarí",
//   },
//   {
//     provinceId: "MIS",
//     name: "Cerro Azul",
//   },
//   {
//     provinceId: "MIS",
//     name: "Cerro Corá",
//   },
//   {
//     provinceId: "MIS",
//     name: "Col. Alberdi",
//   },
//   {
//     provinceId: "MIS",
//     name: "Col. Aurora",
//   },
//   {
//     provinceId: "MIS",
//     name: "Col. Delicia",
//   },
//   {
//     provinceId: "MIS",
//     name: "Col. Polana",
//   },
//   {
//     provinceId: "MIS",
//     name: "Col. Victoria",
//   },
//   {
//     provinceId: "MIS",
//     name: "Col. Wanda",
//   },
//   {
//     provinceId: "MIS",
//     name: "Concepción De La Sierra",
//   },
//   {
//     provinceId: "MIS",
//     name: "Corpus",
//   },
//   {
//     provinceId: "MIS",
//     name: "Dos Arroyos",
//   },
//   {
//     provinceId: "MIS",
//     name: "Dos de Mayo",
//   },
//   {
//     provinceId: "MIS",
//     name: "El Alcázar",
//   },
//   {
//     provinceId: "MIS",
//     name: "El Dorado",
//   },
//   {
//     provinceId: "MIS",
//     name: "El Soberbio",
//   },
//   {
//     provinceId: "MIS",
//     name: "Esperanza",
//   },
//   {
//     provinceId: "MIS",
//     name: "F. Ameghino",
//   },
//   {
//     provinceId: "MIS",
//     name: "Fachinal",
//   },
//   {
//     provinceId: "MIS",
//     name: "Garuhapé",
//   },
//   {
//     provinceId: "MIS",
//     name: "Garupá",
//   },
//   {
//     provinceId: "MIS",
//     name: "Gdor. López",
//   },
//   {
//     provinceId: "MIS",
//     name: "Gdor. Roca",
//   },
//   {
//     provinceId: "MIS",
//     name: "Gral. Alvear",
//   },
//   {
//     provinceId: "MIS",
//     name: "Gral. Urquiza",
//   },
//   {
//     provinceId: "MIS",
//     name: "Guaraní",
//   },
//   {
//     provinceId: "MIS",
//     name: "H. Yrigoyen",
//   },
//   {
//     provinceId: "MIS",
//     name: "Iguazú",
//   },
//   {
//     provinceId: "MIS",
//     name: "Itacaruaré",
//   },
//   {
//     provinceId: "MIS",
//     name: "Jardín América",
//   },
//   {
//     provinceId: "MIS",
//     name: "Leandro N. Alem",
//   },
//   {
//     provinceId: "MIS",
//     name: "Libertad",
//   },
//   {
//     provinceId: "MIS",
//     name: "Loreto",
//   },
//   {
//     provinceId: "MIS",
//     name: "Los Helechos",
//   },
//   {
//     provinceId: "MIS",
//     name: "Mártires",
//   },
//   {
//     provinceId: "MIS",
//     name: "15",
//   },
//   {
//     provinceId: "MIS",
//     name: "Mojón Grande",
//   },
//   {
//     provinceId: "MIS",
//     name: "Montecarlo",
//   },
//   {
//     provinceId: "MIS",
//     name: "Nueve de Julio",
//   },
//   {
//     provinceId: "MIS",
//     name: "Oberá",
//   },
//   {
//     provinceId: "MIS",
//     name: "Olegario V. Andrade",
//   },
//   {
//     provinceId: "MIS",
//     name: "Panambí",
//   },
//   {
//     provinceId: "MIS",
//     name: "Posadas",
//   },
//   {
//     provinceId: "MIS",
//     name: "Profundidad",
//   },
//   {
//     provinceId: "MIS",
//     name: "Pto. Iguazú",
//   },
//   {
//     provinceId: "MIS",
//     name: "Pto. Leoni",
//   },
//   {
//     provinceId: "MIS",
//     name: "Pto. Piray",
//   },
//   {
//     provinceId: "MIS",
//     name: "Pto. Rico",
//   },
//   {
//     provinceId: "MIS",
//     name: "Ruiz de Montoya",
//   },
//   {
//     provinceId: "MIS",
//     name: "San Antonio",
//   },
//   {
//     provinceId: "MIS",
//     name: "San Ignacio",
//   },
//   {
//     provinceId: "MIS",
//     name: "San Javier",
//   },
//   {
//     provinceId: "MIS",
//     name: "San José",
//   },
//   {
//     provinceId: "MIS",
//     name: "San Martín",
//   },
//   {
//     provinceId: "MIS",
//     name: "San Pedro",
//   },
//   {
//     provinceId: "MIS",
//     name: "San Vicente",
//   },
//   {
//     provinceId: "MIS",
//     name: "Santiago De Liniers",
//   },
//   {
//     provinceId: "MIS",
//     name: "Santo Pipo",
//   },
//   {
//     provinceId: "MIS",
//     name: "Sta. Ana",
//   },
//   {
//     provinceId: "MIS",
//     name: "Sta. María",
//   },
//   {
//     provinceId: "MIS",
//     name: "Tres Capones",
//   },
//   {
//     provinceId: "MIS",
//     name: "Veinticinco de Mayo",
//   },
//   {
//     provinceId: "MIS",
//     name: "Wanda",
//   },
//   {
//     provinceId: "NEU",
//     name: "Aguada San Roque",
//   },
//   {
//     provinceId: "NEU",
//     name: "Aluminé",
//   },
//   {
//     provinceId: "NEU",
//     name: "Andacollo",
//   },
//   {
//     provinceId: "NEU",
//     name: "Añelo",
//   },
//   {
//     provinceId: "NEU",
//     name: "Bajada del Agrio",
//   },
//   {
//     provinceId: "NEU",
//     name: "Barrancas",
//   },
//   {
//     provinceId: "NEU",
//     name: "Buta Ranquil",
//   },
//   {
//     provinceId: "NEU",
//     name: "Capital",
//   },
//   {
//     provinceId: "NEU",
//     name: "Caviahué",
//   },
//   {
//     provinceId: "NEU",
//     name: "Centenario",
//   },
//   {
//     provinceId: "NEU",
//     name: "Chorriaca",
//   },
//   {
//     provinceId: "NEU",
//     name: "Chos Malal",
//   },
//   {
//     provinceId: "NEU",
//     name: "Cipolletti",
//   },
//   {
//     provinceId: "NEU",
//     name: "Covunco Abajo",
//   },
//   {
//     provinceId: "NEU",
//     name: "Coyuco Cochico",
//   },
//   {
//     provinceId: "NEU",
//     name: "Cutral Có",
//   },
//   {
//     provinceId: "NEU",
//     name: "El Cholar",
//   },
//   {
//     provinceId: "NEU",
//     name: "El Huecú",
//   },
//   {
//     provinceId: "NEU",
//     name: "El Sauce",
//   },
//   {
//     provinceId: "NEU",
//     name: "Guañacos",
//   },
//   {
//     provinceId: "NEU",
//     name: "Huinganco",
//   },
//   {
//     provinceId: "NEU",
//     name: "Las Coloradas",
//   },
//   {
//     provinceId: "NEU",
//     name: "Las Lajas",
//   },
//   {
//     provinceId: "NEU",
//     name: "Las Ovejas",
//   },
//   {
//     provinceId: "NEU",
//     name: "Loncopué",
//   },
//   {
//     provinceId: "NEU",
//     name: "Los Catutos",
//   },
//   {
//     provinceId: "NEU",
//     name: "Los Chihuidos",
//   },
//   {
//     provinceId: "NEU",
//     name: "Los Miches",
//   },
//   {
//     provinceId: "NEU",
//     name: "Manzano Amargo",
//   },
//   {
//     provinceId: "NEU",
//     name: "16",
//   },
//   {
//     provinceId: "NEU",
//     name: "Octavio Pico",
//   },
//   {
//     provinceId: "NEU",
//     name: "Paso Aguerre",
//   },
//   {
//     provinceId: "NEU",
//     name: "Picún Leufú",
//   },
//   {
//     provinceId: "NEU",
//     name: "Piedra del Aguila",
//   },
//   {
//     provinceId: "NEU",
//     name: "Pilo Lil",
//   },
//   {
//     provinceId: "NEU",
//     name: "Plaza Huincul",
//   },
//   {
//     provinceId: "NEU",
//     name: "Plottier",
//   },
//   {
//     provinceId: "NEU",
//     name: "Quili Malal",
//   },
//   {
//     provinceId: "NEU",
//     name: "Ramón Castro",
//   },
//   {
//     provinceId: "NEU",
//     name: "Rincón de Los Sauces",
//   },
//   {
//     provinceId: "NEU",
//     name: "San Martín de Los Andes",
//   },
//   {
//     provinceId: "NEU",
//     name: "San Patricio del Chañar",
//   },
//   {
//     provinceId: "NEU",
//     name: "Santo Tomás",
//   },
//   {
//     provinceId: "NEU",
//     name: "Sauzal Bonito",
//   },
//   {
//     provinceId: "NEU",
//     name: "Senillosa",
//   },
//   {
//     provinceId: "NEU",
//     name: "Taquimilán",
//   },
//   {
//     provinceId: "NEU",
//     name: "Tricao Malal",
//   },
//   {
//     provinceId: "NEU",
//     name: "Varvarco",
//   },
//   {
//     provinceId: "NEU",
//     name: "Villa Curí Leuvu",
//   },
//   {
//     provinceId: "NEU",
//     name: "Villa del Nahueve",
//   },
//   {
//     provinceId: "NEU",
//     name: "Villa del Puente Picún Leuvú",
//   },
//   {
//     provinceId: "NEU",
//     name: "Villa El Chocón",
//   },
//   {
//     provinceId: "NEU",
//     name: "Villa La Angostura",
//   },
//   {
//     provinceId: "NEU",
//     name: "Villa Pehuenia",
//   },
//   {
//     provinceId: "NEU",
//     name: "Villa Traful",
//   },
//   {
//     provinceId: "NEU",
//     name: "Vista Alegre",
//   },
//   {
//     provinceId: "NEU",
//     name: "Zapala",
//   },
//   {
//     provinceId: "RNE",
//     name: "Aguada Cecilio",
//   },
//   {
//     provinceId: "RNE",
//     name: "Aguada de Guerra",
//   },
//   {
//     provinceId: "RNE",
//     name: "Allén",
//   },
//   {
//     provinceId: "RNE",
//     name: "Arroyo de La Ventana",
//   },
//   {
//     provinceId: "RNE",
//     name: "Arroyo Los Berros",
//   },
//   {
//     provinceId: "RNE",
//     name: "Bariloche",
//   },
//   {
//     provinceId: "RNE",
//     name: "Calte. Cordero",
//   },
//   {
//     provinceId: "RNE",
//     name: "Campo Grande",
//   },
//   {
//     provinceId: "RNE",
//     name: "Catriel",
//   },
//   {
//     provinceId: "RNE",
//     name: "Cerro Policía",
//   },
//   {
//     provinceId: "RNE",
//     name: "Cervantes",
//   },
//   {
//     provinceId: "RNE",
//     name: "Chelforo",
//   },
//   {
//     provinceId: "RNE",
//     name: "Chimpay",
//   },
//   {
//     provinceId: "RNE",
//     name: "Chinchinales",
//   },
//   {
//     provinceId: "RNE",
//     name: "Chipauquil",
//   },
//   {
//     provinceId: "RNE",
//     name: "Choele Choel",
//   },
//   {
//     provinceId: "RNE",
//     name: "Cinco Saltos",
//   },
//   {
//     provinceId: "RNE",
//     name: "Cipolletti",
//   },
//   {
//     provinceId: "RNE",
//     name: "Clemente Onelli",
//   },
//   {
//     provinceId: "RNE",
//     name: "Colán Conhue",
//   },
//   {
//     provinceId: "RNE",
//     name: "Comallo",
//   },
//   {
//     provinceId: "RNE",
//     name: "Comicó",
//   },
//   {
//     provinceId: "RNE",
//     name: "Cona Niyeu",
//   },
//   {
//     provinceId: "RNE",
//     name: "Coronel Belisle",
//   },
//   {
//     provinceId: "RNE",
//     name: "Cubanea",
//   },
//   {
//     provinceId: "RNE",
//     name: "Darwin",
//   },
//   {
//     provinceId: "RNE",
//     name: "Dina Huapi",
//   },
//   {
//     provinceId: "RNE",
//     name: "El Bolsón",
//   },
//   {
//     provinceId: "RNE",
//     name: "El Caín",
//   },
//   {
//     provinceId: "RNE",
//     name: "El Manso",
//   },
//   {
//     provinceId: "RNE",
//     name: "Gral. Conesa",
//   },
//   {
//     provinceId: "RNE",
//     name: "Gral. Enrique Godoy",
//   },
//   {
//     provinceId: "RNE",
//     name: "Gral. Fernandez Oro",
//   },
//   {
//     provinceId: "RNE",
//     name: "Gral. Roca",
//   },
//   {
//     provinceId: "RNE",
//     name: "Guardia Mitre",
//   },
//   {
//     provinceId: "RNE",
//     name: "Ing. Huergo",
//   },
//   {
//     provinceId: "RNE",
//     name: "Ing. Jacobacci",
//   },
//   {
//     provinceId: "RNE",
//     name: "Laguna Blanca",
//   },
//   {
//     provinceId: "RNE",
//     name: "Lamarque",
//   },
//   {
//     provinceId: "RNE",
//     name: "Las Grutas",
//   },
//   {
//     provinceId: "RNE",
//     name: "Los Menucos",
//   },
//   {
//     provinceId: "RNE",
//     name: "Luis Beltrán",
//   },
//   {
//     provinceId: "RNE",
//     name: "Mainqué",
//   },
//   {
//     provinceId: "RNE",
//     name: "Mamuel Choique",
//   },
//   {
//     provinceId: "RNE",
//     name: "Maquinchao",
//   },
//   {
//     provinceId: "RNE",
//     name: "Mencué",
//   },
//   {
//     provinceId: "RNE",
//     name: "Mtro. Ramos Mexia",
//   },
//   {
//     provinceId: "RNE",
//     name: "Nahuel Niyeu",
//   },
//   {
//     provinceId: "RNE",
//     name: "Naupa Huen",
//   },
//   {
//     provinceId: "RNE",
//     name: "Ñorquinco",
//   },
//   {
//     provinceId: "RNE",
//     name: "Ojos de Agua",
//   },
//   {
//     provinceId: "RNE",
//     name: "Paso de Agua",
//   },
//   {
//     provinceId: "RNE",
//     name: "Paso Flores",
//   },
//   {
//     provinceId: "RNE",
//     name: "Peñas Blancas",
//   },
//   {
//     provinceId: "RNE",
//     name: "Pichi Mahuida",
//   },
//   {
//     provinceId: "RNE",
//     name: "Pilcaniyeu",
//   },
//   {
//     provinceId: "RNE",
//     name: "Pomona",
//   },
//   {
//     provinceId: "RNE",
//     name: "Prahuaniyeu",
//   },
//   {
//     provinceId: "RNE",
//     name: "Rincón Treneta",
//   },
//   {
//     provinceId: "RNE",
//     name: "Río Chico",
//   },
//   {
//     provinceId: "RNE",
//     name: "Río Colorado",
//   },
//   {
//     provinceId: "RNE",
//     name: "Roca",
//   },
//   {
//     provinceId: "RNE",
//     name: "San Antonio Oeste",
//   },
//   {
//     provinceId: "RNE",
//     name: "San Javier",
//   },
//   {
//     provinceId: "RNE",
//     name: "Sierra Colorada",
//   },
//   {
//     provinceId: "RNE",
//     name: "Sierra Grande",
//   },
//   {
//     provinceId: "RNE",
//     name: "Sierra Pailemán",
//   },
//   {
//     provinceId: "RNE",
//     name: "Valcheta",
//   },
//   {
//     provinceId: "RNE",
//     name: "Valle Azul",
//   },
//   {
//     provinceId: "RNE",
//     name: "Viedma",
//   },
//   {
//     provinceId: "RNE",
//     name: "Villa Llanquín",
//   },
//   {
//     provinceId: "RNE",
//     name: "Villa Mascardi",
//   },
//   {
//     provinceId: "RNE",
//     name: "Villa Regina",
//   },
//   {
//     provinceId: "RNE",
//     name: "Yaminué",
//   },
//   {
//     provinceId: "SAL",
//     name: "A. Saravia",
//   },
//   {
//     provinceId: "SAL",
//     name: "Aguaray",
//   },
//   {
//     provinceId: "SAL",
//     name: "Angastaco",
//   },
//   {
//     provinceId: "SAL",
//     name: "Animaná",
//   },
//   {
//     provinceId: "SAL",
//     name: "Cachi",
//   },
//   {
//     provinceId: "SAL",
//     name: "Cafayate",
//   },
//   {
//     provinceId: "SAL",
//     name: "Campo Quijano",
//   },
//   {
//     provinceId: "SAL",
//     name: "Campo Santo",
//   },
//   {
//     provinceId: "SAL",
//     name: "Capital",
//   },
//   {
//     provinceId: "SAL",
//     name: "Cerrillos",
//   },
//   {
//     provinceId: "SAL",
//     name: "Chicoana",
//   },
//   {
//     provinceId: "SAL",
//     name: "Col. Sta. Rosa",
//   },
//   {
//     provinceId: "SAL",
//     name: "Coronel Moldes",
//   },
//   {
//     provinceId: "SAL",
//     name: "El Bordo",
//   },
//   {
//     provinceId: "SAL",
//     name: "El Carril",
//   },
//   {
//     provinceId: "SAL",
//     name: "El Galpón",
//   },
//   {
//     provinceId: "SAL",
//     name: "El Jardín",
//   },
//   {
//     provinceId: "SAL",
//     name: "El Potrero",
//   },
//   {
//     provinceId: "SAL",
//     name: "El Quebrachal",
//   },
//   {
//     provinceId: "SAL",
//     name: "El Tala",
//   },
//   {
//     provinceId: "SAL",
//     name: "Embarcación",
//   },
//   {
//     provinceId: "SAL",
//     name: "Gral. Ballivian",
//   },
//   {
//     provinceId: "SAL",
//     name: "Gral. Güemes",
//   },
//   {
//     provinceId: "SAL",
//     name: "Gral. Mosconi",
//   },
//   {
//     provinceId: "SAL",
//     name: "Gral. Pizarro",
//   },
//   {
//     provinceId: "SAL",
//     name: "Guachipas",
//   },
//   {
//     provinceId: "SAL",
//     name: "Hipólito Yrigoyen",
//   },
//   {
//     provinceId: "SAL",
//     name: "Iruyá",
//   },
//   {
//     provinceId: "SAL",
//     name: "Isla De Cañas",
//   },
//   {
//     provinceId: "SAL",
//     name: "J. V. Gonzalez",
//   },
//   {
//     provinceId: "SAL",
//     name: "La Caldera",
//   },
//   {
//     provinceId: "SAL",
//     name: "La Candelaria",
//   },
//   {
//     provinceId: "SAL",
//     name: "La Merced",
//   },
//   {
//     provinceId: "SAL",
//     name: "La Poma",
//   },
//   {
//     provinceId: "SAL",
//     name: "La Viña",
//   },
//   {
//     provinceId: "SAL",
//     name: "Las Lajitas",
//   },
//   {
//     provinceId: "SAL",
//     name: "Los Toldos",
//   },
//   {
//     provinceId: "SAL",
//     name: "Metán",
//   },
//   {
//     provinceId: "SAL",
//     name: "Molinos",
//   },
//   {
//     provinceId: "SAL",
//     name: "Nazareno",
//   },
//   {
//     provinceId: "SAL",
//     name: "Orán",
//   },
//   {
//     provinceId: "SAL",
//     name: "Payogasta",
//   },
//   {
//     provinceId: "SAL",
//     name: "Pichanal",
//   },
//   {
//     provinceId: "SAL",
//     name: "Prof. S. Mazza",
//   },
//   {
//     provinceId: "SAL",
//     name: "Río Piedras",
//   },
//   {
//     provinceId: "SAL",
//     name: "Rivadavia Banda Norte",
//   },
//   {
//     provinceId: "SAL",
//     name: "Rivadavia Banda Sur",
//   },
//   {
//     provinceId: "SAL",
//     name: "Rosario de La Frontera",
//   },
//   {
//     provinceId: "SAL",
//     name: "Rosario de Lerma",
//   },
//   {
//     provinceId: "SAL",
//     name: "Saclantás",
//   },
//   {
//     provinceId: "SAL",
//     name: "18",
//   },
//   {
//     provinceId: "SAL",
//     name: "San Antonio",
//   },
//   {
//     provinceId: "SAL",
//     name: "San Carlos",
//   },
//   {
//     provinceId: "SAL",
//     name: "San José De Metán",
//   },
//   {
//     provinceId: "SAL",
//     name: "San Ramón",
//   },
//   {
//     provinceId: "SAL",
//     name: "Santa Victoria E.",
//   },
//   {
//     provinceId: "SAL",
//     name: "Santa Victoria O.",
//   },
//   {
//     provinceId: "SAL",
//     name: "Tartagal",
//   },
//   {
//     provinceId: "SAL",
//     name: "Tolar Grande",
//   },
//   {
//     provinceId: "SAL",
//     name: "Urundel",
//   },
//   {
//     provinceId: "SAL",
//     name: "Vaqueros",
//   },
//   {
//     provinceId: "SAL",
//     name: "Villa San Lorenzo",
//   },
//   {
//     provinceId: "SJU",
//     name: "Albardón",
//   },
//   {
//     provinceId: "SJU",
//     name: "Angaco",
//   },
//   {
//     provinceId: "SJU",
//     name: "Calingasta",
//   },
//   {
//     provinceId: "SJU",
//     name: "Capital",
//   },
//   {
//     provinceId: "SJU",
//     name: "Caucete",
//   },
//   {
//     provinceId: "SJU",
//     name: "Chimbas",
//   },
//   {
//     provinceId: "SJU",
//     name: "Iglesia",
//   },
//   {
//     provinceId: "SJU",
//     name: "Jachal",
//   },
//   {
//     provinceId: "SJU",
//     name: "Nueve de Julio",
//   },
//   {
//     provinceId: "SJU",
//     name: "Pocito",
//   },
//   {
//     provinceId: "SJU",
//     name: "Rawson",
//   },
//   {
//     provinceId: "SJU",
//     name: "Rivadavia",
//   },
//   {
//     provinceId: "SJU",
//     name: "19",
//   },
//   {
//     provinceId: "SJU",
//     name: "San Martín",
//   },
//   {
//     provinceId: "SJU",
//     name: "Santa Lucía",
//   },
//   {
//     provinceId: "SJU",
//     name: "Sarmiento",
//   },
//   {
//     provinceId: "SJU",
//     name: "Ullum",
//   },
//   {
//     provinceId: "SJU",
//     name: "Valle Fértil",
//   },
//   {
//     provinceId: "SJU",
//     name: "Veinticinco de Mayo",
//   },
//   {
//     provinceId: "SJU",
//     name: "Zonda",
//   },
//   {
//     provinceId: "SLU",
//     name: "Alto Pelado",
//   },
//   {
//     provinceId: "SLU",
//     name: "Alto Pencoso",
//   },
//   {
//     provinceId: "SLU",
//     name: "Anchorena",
//   },
//   {
//     provinceId: "SLU",
//     name: "Arizona",
//   },
//   {
//     provinceId: "SLU",
//     name: "Bagual",
//   },
//   {
//     provinceId: "SLU",
//     name: "Balde",
//   },
//   {
//     provinceId: "SLU",
//     name: "Batavia",
//   },
//   {
//     provinceId: "SLU",
//     name: "Beazley",
//   },
//   {
//     provinceId: "SLU",
//     name: "Buena Esperanza",
//   },
//   {
//     provinceId: "SLU",
//     name: "Candelaria",
//   },
//   {
//     provinceId: "SLU",
//     name: "Capital",
//   },
//   {
//     provinceId: "SLU",
//     name: "Carolina",
//   },
//   {
//     provinceId: "SLU",
//     name: "Carpintería",
//   },
//   {
//     provinceId: "SLU",
//     name: "Concarán",
//   },
//   {
//     provinceId: "SLU",
//     name: "Cortaderas",
//   },
//   {
//     provinceId: "SLU",
//     name: "El Morro",
//   },
//   {
//     provinceId: "SLU",
//     name: "El Trapiche",
//   },
//   {
//     provinceId: "SLU",
//     name: "El Volcán",
//   },
//   {
//     provinceId: "SLU",
//     name: "Fortín El Patria",
//   },
//   {
//     provinceId: "SLU",
//     name: "Fortuna",
//   },
//   {
//     provinceId: "SLU",
//     name: "Fraga",
//   },
//   {
//     provinceId: "SLU",
//     name: "Juan Jorba",
//   },
//   {
//     provinceId: "SLU",
//     name: "Juan Llerena",
//   },
//   {
//     provinceId: "SLU",
//     name: "Juana Koslay",
//   },
//   {
//     provinceId: "SLU",
//     name: "Justo Daract",
//   },
//   {
//     provinceId: "SLU",
//     name: "La Calera",
//   },
//   {
//     provinceId: "SLU",
//     name: "La Florida",
//   },
//   {
//     provinceId: "SLU",
//     name: "La Punilla",
//   },
//   {
//     provinceId: "SLU",
//     name: "La Toma",
//   },
//   {
//     provinceId: "SLU",
//     name: "Lafinur",
//   },
//   {
//     provinceId: "SLU",
//     name: "Las Aguadas",
//   },
//   {
//     provinceId: "SLU",
//     name: "Las Chacras",
//   },
//   {
//     provinceId: "SLU",
//     name: "Las Lagunas",
//   },
//   {
//     provinceId: "SLU",
//     name: "Las Vertientes",
//   },
//   {
//     provinceId: "SLU",
//     name: "Lavaisse",
//   },
//   {
//     provinceId: "SLU",
//     name: "Leandro N. Alem",
//   },
//   {
//     provinceId: "SLU",
//     name: "Los Molles",
//   },
//   {
//     provinceId: "SLU",
//     name: "Luján",
//   },
//   {
//     provinceId: "SLU",
//     name: "Mercedes",
//   },
//   {
//     provinceId: "SLU",
//     name: "Merlo",
//   },
//   {
//     provinceId: "SLU",
//     name: "Naschel",
//   },
//   {
//     provinceId: "SLU",
//     name: "Navia",
//   },
//   {
//     provinceId: "SLU",
//     name: "Nogolí",
//   },
//   {
//     provinceId: "SLU",
//     name: "Nueva Galia",
//   },
//   {
//     provinceId: "SLU",
//     name: "Papagayos",
//   },
//   {
//     provinceId: "SLU",
//     name: "Paso Grande",
//   },
//   {
//     provinceId: "SLU",
//     name: "Potrero de Los Funes",
//   },
//   {
//     provinceId: "SLU",
//     name: "Quines",
//   },
//   {
//     provinceId: "SLU",
//     name: "Renca",
//   },
//   {
//     provinceId: "SLU",
//     name: "Saladillo",
//   },
//   {
//     provinceId: "SLU",
//     name: "San Francisco",
//   },
//   {
//     provinceId: "SLU",
//     name: "San Gerónimo",
//   },
//   {
//     provinceId: "SLU",
//     name: "San Martín",
//   },
//   {
//     provinceId: "SLU",
//     name: "San Pablo",
//   },
//   {
//     provinceId: "SLU",
//     name: "Santa Rosa de Conlara",
//   },
//   {
//     provinceId: "SLU",
//     name: "Talita",
//   },
//   {
//     provinceId: "SLU",
//     name: "Tilisarao",
//   },
//   {
//     provinceId: "SLU",
//     name: "Unión",
//   },
//   {
//     provinceId: "SLU",
//     name: "Villa de La Quebrada",
//   },
//   {
//     provinceId: "SLU",
//     name: "Villa de Praga",
//   },
//   {
//     provinceId: "SLU",
//     name: "Villa del Carmen",
//   },
//   {
//     provinceId: "SLU",
//     name: "Villa Gral. Roca",
//   },
//   {
//     provinceId: "SLU",
//     name: "Villa Larca",
//   },
//   {
//     provinceId: "SLU",
//     name: "Villa Mercedes",
//   },
//   {
//     provinceId: "SLU",
//     name: "Zanjitas",
//   },
//   {
//     provinceId: "SCR",
//     name: "Calafate",
//   },
//   {
//     provinceId: "SCR",
//     name: "Caleta Olivia",
//   },
//   {
//     provinceId: "SCR",
//     name: "Cañadón Seco",
//   },
//   {
//     provinceId: "SCR",
//     name: "Comandante Piedrabuena",
//   },
//   {
//     provinceId: "SCR",
//     name: "El Calafate",
//   },
//   {
//     provinceId: "SCR",
//     name: "El Chaltén",
//   },
//   {
//     provinceId: "SCR",
//     name: "Gdor. Gregores",
//   },
//   {
//     provinceId: "SCR",
//     name: "Hipólito Yrigoyen",
//   },
//   {
//     provinceId: "SCR",
//     name: "Jaramillo",
//   },
//   {
//     provinceId: "SCR",
//     name: "Koluel Kaike",
//   },
//   {
//     provinceId: "SCR",
//     name: "Las Heras",
//   },
//   {
//     provinceId: "SCR",
//     name: "Los Antiguos",
//   },
//   {
//     provinceId: "SCR",
//     name: "Perito Moreno",
//   },
//   {
//     provinceId: "SCR",
//     name: "Pico Truncado",
//   },
//   {
//     provinceId: "SCR",
//     name: "Pto. Deseado",
//   },
//   {
//     provinceId: "SCR",
//     name: "Pto. San Julián",
//   },
//   {
//     provinceId: "SCR",
//     name: "Pto. 21",
//   },
//   {
//     provinceId: "SCR",
//     name: "Río Cuarto",
//   },
//   {
//     provinceId: "SCR",
//     name: "Río Gallegos",
//   },
//   {
//     provinceId: "SCR",
//     name: "Río Turbio",
//   },
//   {
//     provinceId: "SCR",
//     name: "Tres Lagos",
//   },
//   {
//     provinceId: "SCR",
//     name: "Veintiocho De Noviembre",
//   },
//   {
//     provinceId: "SFE",
//     name: "Aarón Castellanos",
//   },
//   {
//     provinceId: "SFE",
//     name: "Acebal",
//   },
//   {
//     provinceId: "SFE",
//     name: "Aguará Grande",
//   },
//   {
//     provinceId: "SFE",
//     name: "Albarellos",
//   },
//   {
//     provinceId: "SFE",
//     name: "Alcorta",
//   },
//   {
//     provinceId: "SFE",
//     name: "Aldao",
//   },
//   {
//     provinceId: "SFE",
//     name: "Alejandra",
//   },
//   {
//     provinceId: "SFE",
//     name: "Álvarez",
//   },
//   {
//     provinceId: "SFE",
//     name: "Ambrosetti",
//   },
//   {
//     provinceId: "SFE",
//     name: "Amenábar",
//   },
//   {
//     provinceId: "SFE",
//     name: "Angélica",
//   },
//   {
//     provinceId: "SFE",
//     name: "Angeloni",
//   },
//   {
//     provinceId: "SFE",
//     name: "Arequito",
//   },
//   {
//     provinceId: "SFE",
//     name: "Arminda",
//   },
//   {
//     provinceId: "SFE",
//     name: "Armstrong",
//   },
//   {
//     provinceId: "SFE",
//     name: "Arocena",
//   },
//   {
//     provinceId: "SFE",
//     name: "Arroyo Aguiar",
//   },
//   {
//     provinceId: "SFE",
//     name: "Arroyo Ceibal",
//   },
//   {
//     provinceId: "SFE",
//     name: "Arroyo Leyes",
//   },
//   {
//     provinceId: "SFE",
//     name: "Arroyo Seco",
//   },
//   {
//     provinceId: "SFE",
//     name: "Arrufó",
//   },
//   {
//     provinceId: "SFE",
//     name: "Arteaga",
//   },
//   {
//     provinceId: "SFE",
//     name: "Ataliva",
//   },
//   {
//     provinceId: "SFE",
//     name: "Aurelia",
//   },
//   {
//     provinceId: "SFE",
//     name: "Avellaneda",
//   },
//   {
//     provinceId: "SFE",
//     name: "Barrancas",
//   },
//   {
//     provinceId: "SFE",
//     name: "Bauer Y Sigel",
//   },
//   {
//     provinceId: "SFE",
//     name: "Bella Italia",
//   },
//   {
//     provinceId: "SFE",
//     name: "Berabevú",
//   },
//   {
//     provinceId: "SFE",
//     name: "Berna",
//   },
//   {
//     provinceId: "SFE",
//     name: "Bernardo de Irigoyen",
//   },
//   {
//     provinceId: "SFE",
//     name: "Bigand",
//   },
//   {
//     provinceId: "SFE",
//     name: "Bombal",
//   },
//   {
//     provinceId: "SFE",
//     name: "Bouquet",
//   },
//   {
//     provinceId: "SFE",
//     name: "Bustinza",
//   },
//   {
//     provinceId: "SFE",
//     name: "Cabal",
//   },
//   {
//     provinceId: "SFE",
//     name: "Cacique Ariacaiquin",
//   },
//   {
//     provinceId: "SFE",
//     name: "Cafferata",
//   },
//   {
//     provinceId: "SFE",
//     name: "Calchaquí",
//   },
//   {
//     provinceId: "SFE",
//     name: "Campo Andino",
//   },
//   {
//     provinceId: "SFE",
//     name: "Campo Piaggio",
//   },
//   {
//     provinceId: "SFE",
//     name: "Cañada de Gómez",
//   },
//   {
//     provinceId: "SFE",
//     name: "Cañada del Ucle",
//   },
//   {
//     provinceId: "SFE",
//     name: "Cañada Rica",
//   },
//   {
//     provinceId: "SFE",
//     name: "Cañada Rosquín",
//   },
//   {
//     provinceId: "SFE",
//     name: "Candioti",
//   },
//   {
//     provinceId: "SFE",
//     name: "Capital",
//   },
//   {
//     provinceId: "SFE",
//     name: "Capitán Bermúdez",
//   },
//   {
//     provinceId: "SFE",
//     name: "Capivara",
//   },
//   {
//     provinceId: "SFE",
//     name: "Carcarañá",
//   },
//   {
//     provinceId: "SFE",
//     name: "Carlos Pellegrini",
//   },
//   {
//     provinceId: "SFE",
//     name: "Carmen",
//   },
//   {
//     provinceId: "SFE",
//     name: "Carmen Del Sauce",
//   },
//   {
//     provinceId: "SFE",
//     name: "Carreras",
//   },
//   {
//     provinceId: "SFE",
//     name: "Carrizales",
//   },
//   {
//     provinceId: "SFE",
//     name: "Casalegno",
//   },
//   {
//     provinceId: "SFE",
//     name: "Casas",
//   },
//   {
//     provinceId: "SFE",
//     name: "Casilda",
//   },
//   {
//     provinceId: "SFE",
//     name: "Castelar",
//   },
//   {
//     provinceId: "SFE",
//     name: "Castellanos",
//   },
//   {
//     provinceId: "SFE",
//     name: "Cayastá",
//   },
//   {
//     provinceId: "SFE",
//     name: "Cayastacito",
//   },
//   {
//     provinceId: "SFE",
//     name: "Centeno",
//   },
//   {
//     provinceId: "SFE",
//     name: "Cepeda",
//   },
//   {
//     provinceId: "SFE",
//     name: "Ceres",
//   },
//   {
//     provinceId: "SFE",
//     name: "Chabás",
//   },
//   {
//     provinceId: "SFE",
//     name: "Chañar Ladeado",
//   },
//   {
//     provinceId: "SFE",
//     name: "Chapuy",
//   },
//   {
//     provinceId: "SFE",
//     name: "Chovet",
//   },
//   {
//     provinceId: "SFE",
//     name: "Christophersen",
//   },
//   {
//     provinceId: "SFE",
//     name: "Classon",
//   },
//   {
//     provinceId: "SFE",
//     name: "Cnel. Arnold",
//   },
//   {
//     provinceId: "SFE",
//     name: "Cnel. Bogado",
//   },
//   {
//     provinceId: "SFE",
//     name: "Cnel. Dominguez",
//   },
//   {
//     provinceId: "SFE",
//     name: "Cnel. Fraga",
//   },
//   {
//     provinceId: "SFE",
//     name: "Col. Aldao",
//   },
//   {
//     provinceId: "SFE",
//     name: "Col. Ana",
//   },
//   {
//     provinceId: "SFE",
//     name: "Col. Belgrano",
//   },
//   {
//     provinceId: "SFE",
//     name: "Col. Bicha",
//   },
//   {
//     provinceId: "SFE",
//     name: "Col. Bigand",
//   },
//   {
//     provinceId: "SFE",
//     name: "Col. Bossi",
//   },
//   {
//     provinceId: "SFE",
//     name: "Col. Cavour",
//   },
//   {
//     provinceId: "SFE",
//     name: "Col. Cello",
//   },
//   {
//     provinceId: "SFE",
//     name: "Col. Dolores",
//   },
//   {
//     provinceId: "SFE",
//     name: "Col. Dos Rosas",
//   },
//   {
//     provinceId: "SFE",
//     name: "Col. Durán",
//   },
//   {
//     provinceId: "SFE",
//     name: "Col. Iturraspe",
//   },
//   {
//     provinceId: "SFE",
//     name: "Col. Margarita",
//   },
//   {
//     provinceId: "SFE",
//     name: "Col. Mascias",
//   },
//   {
//     provinceId: "SFE",
//     name: "Col. Raquel",
//   },
//   {
//     provinceId: "SFE",
//     name: "Col. Rosa",
//   },
//   {
//     provinceId: "SFE",
//     name: "Col. San José",
//   },
//   {
//     provinceId: "SFE",
//     name: "Constanza",
//   },
//   {
//     provinceId: "SFE",
//     name: "Coronda",
//   },
//   {
//     provinceId: "SFE",
//     name: "Correa",
//   },
//   {
//     provinceId: "SFE",
//     name: "Crispi",
//   },
//   {
//     provinceId: "SFE",
//     name: "Cululú",
//   },
//   {
//     provinceId: "SFE",
//     name: "Curupayti",
//   },
//   {
//     provinceId: "SFE",
//     name: "Desvio Arijón",
//   },
//   {
//     provinceId: "SFE",
//     name: "Diaz",
//   },
//   {
//     provinceId: "SFE",
//     name: "Diego de Alvear",
//   },
//   {
//     provinceId: "SFE",
//     name: "Egusquiza",
//   },
//   {
//     provinceId: "SFE",
//     name: "El Arazá",
//   },
//   {
//     provinceId: "SFE",
//     name: "El Rabón",
//   },
//   {
//     provinceId: "SFE",
//     name: "El Sombrerito",
//   },
//   {
//     provinceId: "SFE",
//     name: "El Trébol",
//   },
//   {
//     provinceId: "SFE",
//     name: "Elisa",
//   },
//   {
//     provinceId: "SFE",
//     name: "Elortondo",
//   },
//   {
//     provinceId: "SFE",
//     name: "Emilia",
//   },
//   {
//     provinceId: "SFE",
//     name: "Empalme San Carlos",
//   },
//   {
//     provinceId: "SFE",
//     name: "Empalme Villa Constitucion",
//   },
//   {
//     provinceId: "SFE",
//     name: "Esmeralda",
//   },
//   {
//     provinceId: "SFE",
//     name: "Esperanza",
//   },
//   {
//     provinceId: "SFE",
//     name: "Estación Alvear",
//   },
//   {
//     provinceId: "SFE",
//     name: "Estacion Clucellas",
//   },
//   {
//     provinceId: "SFE",
//     name: "Esteban Rams",
//   },
//   {
//     provinceId: "SFE",
//     name: "Esther",
//   },
//   {
//     provinceId: "SFE",
//     name: "Esustolia",
//   },
//   {
//     provinceId: "SFE",
//     name: "Eusebia",
//   },
//   {
//     provinceId: "SFE",
//     name: "Felicia",
//   },
//   {
//     provinceId: "SFE",
//     name: "Fidela",
//   },
//   {
//     provinceId: "SFE",
//     name: "Fighiera",
//   },
//   {
//     provinceId: "SFE",
//     name: "Firmat",
//   },
//   {
//     provinceId: "SFE",
//     name: "Florencia",
//   },
//   {
//     provinceId: "SFE",
//     name: "Fortín Olmos",
//   },
//   {
//     provinceId: "SFE",
//     name: "Franck",
//   },
//   {
//     provinceId: "SFE",
//     name: "Fray Luis Beltrán",
//   },
//   {
//     provinceId: "SFE",
//     name: "Frontera",
//   },
//   {
//     provinceId: "SFE",
//     name: "Fuentes",
//   },
//   {
//     provinceId: "SFE",
//     name: "Funes",
//   },
//   {
//     provinceId: "SFE",
//     name: "Gaboto",
//   },
//   {
//     provinceId: "SFE",
//     name: "Galisteo",
//   },
//   {
//     provinceId: "SFE",
//     name: "Gálvez",
//   },
//   {
//     provinceId: "SFE",
//     name: "Garabalto",
//   },
//   {
//     provinceId: "SFE",
//     name: "Garibaldi",
//   },
//   {
//     provinceId: "SFE",
//     name: "Gato Colorado",
//   },
//   {
//     provinceId: "SFE",
//     name: "Gdor. Crespo",
//   },
//   {
//     provinceId: "SFE",
//     name: "Gessler",
//   },
//   {
//     provinceId: "SFE",
//     name: "Godoy",
//   },
//   {
//     provinceId: "SFE",
//     name: "Golondrina",
//   },
//   {
//     provinceId: "SFE",
//     name: "Gral. Gelly",
//   },
//   {
//     provinceId: "SFE",
//     name: "Gral. Lagos",
//   },
//   {
//     provinceId: "SFE",
//     name: "Granadero Baigorria",
//   },
//   {
//     provinceId: "SFE",
//     name: "Gregoria Perez De Denis",
//   },
//   {
//     provinceId: "SFE",
//     name: "Grutly",
//   },
//   {
//     provinceId: "SFE",
//     name: "Guadalupe N.",
//   },
//   {
//     provinceId: "SFE",
//     name: "Gödeken",
//   },
//   {
//     provinceId: "SFE",
//     name: "Helvecia",
//   },
//   {
//     provinceId: "SFE",
//     name: "Hersilia",
//   },
//   {
//     provinceId: "SFE",
//     name: "Hipatía",
//   },
//   {
//     provinceId: "SFE",
//     name: "Huanqueros",
//   },
//   {
//     provinceId: "SFE",
//     name: "Hugentobler",
//   },
//   {
//     provinceId: "SFE",
//     name: "Hughes",
//   },
//   {
//     provinceId: "SFE",
//     name: "Humberto 1º",
//   },
//   {
//     provinceId: "SFE",
//     name: "Humboldt",
//   },
//   {
//     provinceId: "SFE",
//     name: "Ibarlucea",
//   },
//   {
//     provinceId: "SFE",
//     name: "Ing. Chanourdie",
//   },
//   {
//     provinceId: "SFE",
//     name: "Intiyaco",
//   },
//   {
//     provinceId: "SFE",
//     name: "Ituzaingó",
//   },
//   {
//     provinceId: "SFE",
//     name: "Jacinto L. Aráuz",
//   },
//   {
//     provinceId: "SFE",
//     name: "Josefina",
//   },
//   {
//     provinceId: "SFE",
//     name: "Juan B. Molina",
//   },
//   {
//     provinceId: "SFE",
//     name: "Juan de Garay",
//   },
//   {
//     provinceId: "SFE",
//     name: "Juncal",
//   },
//   {
//     provinceId: "SFE",
//     name: "La Brava",
//   },
//   {
//     provinceId: "SFE",
//     name: "La Cabral",
//   },
//   {
//     provinceId: "SFE",
//     name: "La Camila",
//   },
//   {
//     provinceId: "SFE",
//     name: "La Chispa",
//   },
//   {
//     provinceId: "SFE",
//     name: "La Clara",
//   },
//   {
//     provinceId: "SFE",
//     name: "La Criolla",
//   },
//   {
//     provinceId: "SFE",
//     name: "La Gallareta",
//   },
//   {
//     provinceId: "SFE",
//     name: "La Lucila",
//   },
//   {
//     provinceId: "SFE",
//     name: "La Pelada",
//   },
//   {
//     provinceId: "SFE",
//     name: "La Penca",
//   },
//   {
//     provinceId: "SFE",
//     name: "La Rubia",
//   },
//   {
//     provinceId: "SFE",
//     name: "La Sarita",
//   },
//   {
//     provinceId: "SFE",
//     name: "La Vanguardia",
//   },
//   {
//     provinceId: "SFE",
//     name: "Labordeboy",
//   },
//   {
//     provinceId: "SFE",
//     name: "Laguna Paiva",
//   },
//   {
//     provinceId: "SFE",
//     name: "Landeta",
//   },
//   {
//     provinceId: "SFE",
//     name: "Lanteri",
//   },
//   {
//     provinceId: "SFE",
//     name: "Larrechea",
//   },
//   {
//     provinceId: "SFE",
//     name: "Las Avispas",
//   },
//   {
//     provinceId: "SFE",
//     name: "Las Bandurrias",
//   },
//   {
//     provinceId: "SFE",
//     name: "Las Garzas",
//   },
//   {
//     provinceId: "SFE",
//     name: "Las Palmeras",
//   },
//   {
//     provinceId: "SFE",
//     name: "Las Parejas",
//   },
//   {
//     provinceId: "SFE",
//     name: "Las Petacas",
//   },
//   {
//     provinceId: "SFE",
//     name: "Las Rosas",
//   },
//   {
//     provinceId: "SFE",
//     name: "Las Toscas",
//   },
//   {
//     provinceId: "SFE",
//     name: "Las Tunas",
//   },
//   {
//     provinceId: "SFE",
//     name: "Lazzarino",
//   },
//   {
//     provinceId: "SFE",
//     name: "Lehmann",
//   },
//   {
//     provinceId: "SFE",
//     name: "Llambi Campbell",
//   },
//   {
//     provinceId: "SFE",
//     name: "Logroño",
//   },
//   {
//     provinceId: "SFE",
//     name: "Loma Alta",
//   },
//   {
//     provinceId: "SFE",
//     name: "López",
//   },
//   {
//     provinceId: "SFE",
//     name: "Los Amores",
//   },
//   {
//     provinceId: "SFE",
//     name: "Los Cardos",
//   },
//   {
//     provinceId: "SFE",
//     name: "Los Laureles",
//   },
//   {
//     provinceId: "SFE",
//     name: "Los Molinos",
//   },
//   {
//     provinceId: "SFE",
//     name: "Los Quirquinchos",
//   },
//   {
//     provinceId: "SFE",
//     name: "Lucio V. Lopez",
//   },
//   {
//     provinceId: "SFE",
//     name: "Luis Palacios",
//   },
//   {
//     provinceId: "SFE",
//     name: "Ma. Juana",
//   },
//   {
//     provinceId: "SFE",
//     name: "Ma. Luisa",
//   },
//   {
//     provinceId: "SFE",
//     name: "Ma. Susana",
//   },
//   {
//     provinceId: "SFE",
//     name: "Ma. Teresa",
//   },
//   {
//     provinceId: "SFE",
//     name: "Maciel",
//   },
//   {
//     provinceId: "SFE",
//     name: "Maggiolo",
//   },
//   {
//     provinceId: "SFE",
//     name: "Malabrigo",
//   },
//   {
//     provinceId: "SFE",
//     name: "Marcelino Escalada",
//   },
//   {
//     provinceId: "SFE",
//     name: "Margarita",
//   },
//   {
//     provinceId: "SFE",
//     name: "Matilde",
//   },
//   {
//     provinceId: "SFE",
//     name: "Mauá",
//   },
//   {
//     provinceId: "SFE",
//     name: "Máximo Paz",
//   },
//   {
//     provinceId: "SFE",
//     name: "Melincué",
//   },
//   {
//     provinceId: "SFE",
//     name: "Miguel Torres",
//   },
//   {
//     provinceId: "SFE",
//     name: "Moisés Ville",
//   },
//   {
//     provinceId: "SFE",
//     name: "Monigotes",
//   },
//   {
//     provinceId: "SFE",
//     name: "Monje",
//   },
//   {
//     provinceId: "SFE",
//     name: "Monte Obscuridad",
//   },
//   {
//     provinceId: "SFE",
//     name: "Monte Vera",
//   },
//   {
//     provinceId: "SFE",
//     name: "Montefiore",
//   },
//   {
//     provinceId: "SFE",
//     name: "Montes de Oca",
//   },
//   {
//     provinceId: "SFE",
//     name: "Murphy",
//   },
//   {
//     provinceId: "SFE",
//     name: "Ñanducita",
//   },
//   {
//     provinceId: "SFE",
//     name: "Naré",
//   },
//   {
//     provinceId: "SFE",
//     name: "Nelson",
//   },
//   {
//     provinceId: "SFE",
//     name: "Nicanor E. Molinas",
//   },
//   {
//     provinceId: "SFE",
//     name: "Nuevo Torino",
//   },
//   {
//     provinceId: "SFE",
//     name: "Oliveros",
//   },
//   {
//     provinceId: "SFE",
//     name: "Palacios",
//   },
//   {
//     provinceId: "SFE",
//     name: "Pavón",
//   },
//   {
//     provinceId: "SFE",
//     name: "Pavón Arriba",
//   },
//   {
//     provinceId: "SFE",
//     name: "Pedro Gómez Cello",
//   },
//   {
//     provinceId: "SFE",
//     name: "Pérez",
//   },
//   {
//     provinceId: "SFE",
//     name: "Peyrano",
//   },
//   {
//     provinceId: "SFE",
//     name: "Piamonte",
//   },
//   {
//     provinceId: "SFE",
//     name: "Pilar",
//   },
//   {
//     provinceId: "SFE",
//     name: "Piñero",
//   },
//   {
//     provinceId: "SFE",
//     name: "Plaza Clucellas",
//   },
//   {
//     provinceId: "SFE",
//     name: "Portugalete",
//   },
//   {
//     provinceId: "SFE",
//     name: "Pozo Borrado",
//   },
//   {
//     provinceId: "SFE",
//     name: "Progreso",
//   },
//   {
//     provinceId: "SFE",
//     name: "Providencia",
//   },
//   {
//     provinceId: "SFE",
//     name: "Pte. Roca",
//   },
//   {
//     provinceId: "SFE",
//     name: "Pueblo Andino",
//   },
//   {
//     provinceId: "SFE",
//     name: "Pueblo Esther",
//   },
//   {
//     provinceId: "SFE",
//     name: "Pueblo Gral. San Martín",
//   },
//   {
//     provinceId: "SFE",
//     name: "Pueblo Irigoyen",
//   },
//   {
//     provinceId: "SFE",
//     name: "Pueblo Marini",
//   },
//   {
//     provinceId: "SFE",
//     name: "Pueblo Muñoz",
//   },
//   {
//     provinceId: "SFE",
//     name: "Pueblo Uranga",
//   },
//   {
//     provinceId: "SFE",
//     name: "Pujato",
//   },
//   {
//     provinceId: "SFE",
//     name: "Pujato N.",
//   },
//   {
//     provinceId: "SFE",
//     name: "Rafaela",
//   },
//   {
//     provinceId: "SFE",
//     name: "Ramayón",
//   },
//   {
//     provinceId: "SFE",
//     name: "Ramona",
//   },
//   {
//     provinceId: "SFE",
//     name: "Reconquista",
//   },
//   {
//     provinceId: "SFE",
//     name: "Recreo",
//   },
//   {
//     provinceId: "SFE",
//     name: "Ricardone",
//   },
//   {
//     provinceId: "SFE",
//     name: "Rivadavia",
//   },
//   {
//     provinceId: "SFE",
//     name: "Roldán",
//   },
//   {
//     provinceId: "SFE",
//     name: "Romang",
//   },
//   {
//     provinceId: "SFE",
//     name: "Rosario",
//   },
//   {
//     provinceId: "SFE",
//     name: "Rueda",
//   },
//   {
//     provinceId: "SFE",
//     name: "Rufino",
//   },
//   {
//     provinceId: "SFE",
//     name: "Sa Pereira",
//   },
//   {
//     provinceId: "SFE",
//     name: "Saguier",
//   },
//   {
//     provinceId: "SFE",
//     name: "Saladero M. Cabal",
//   },
//   {
//     provinceId: "SFE",
//     name: "Salto Grande",
//   },
//   {
//     provinceId: "SFE",
//     name: "San Agustín",
//   },
//   {
//     provinceId: "SFE",
//     name: "San Antonio de Obligado",
//   },
//   {
//     provinceId: "SFE",
//     name: "San Bernardo (N.J.)",
//   },
//   {
//     provinceId: "SFE",
//     name: "San Bernardo (S.J.)",
//   },
//   {
//     provinceId: "SFE",
//     name: "San Carlos Centro",
//   },
//   {
//     provinceId: "SFE",
//     name: "San Carlos N.",
//   },
//   {
//     provinceId: "SFE",
//     name: "San Carlos S.",
//   },
//   {
//     provinceId: "SFE",
//     name: "San Cristóbal",
//   },
//   {
//     provinceId: "SFE",
//     name: "San Eduardo",
//   },
//   {
//     provinceId: "SFE",
//     name: "San Eugenio",
//   },
//   {
//     provinceId: "SFE",
//     name: "San Fabián",
//   },
//   {
//     provinceId: "SFE",
//     name: "San Fco. de Santa Fé",
//   },
//   {
//     provinceId: "SFE",
//     name: "San Genaro",
//   },
//   {
//     provinceId: "SFE",
//     name: "San Genaro N.",
//   },
//   {
//     provinceId: "SFE",
//     name: "San Gregorio",
//   },
//   {
//     provinceId: "SFE",
//     name: "San Guillermo",
//   },
//   {
//     provinceId: "SFE",
//     name: "San Javier",
//   },
//   {
//     provinceId: "SFE",
//     name: "San Jerónimo del Sauce",
//   },
//   {
//     provinceId: "SFE",
//     name: "San Jerónimo N.",
//   },
//   {
//     provinceId: "SFE",
//     name: "San Jerónimo S.",
//   },
//   {
//     provinceId: "SFE",
//     name: "San Jorge",
//   },
//   {
//     provinceId: "SFE",
//     name: "San José de La Esquina",
//   },
//   {
//     provinceId: "SFE",
//     name: "San José del Rincón",
//   },
//   {
//     provinceId: "SFE",
//     name: "San Justo",
//   },
//   {
//     provinceId: "SFE",
//     name: "San Lorenzo",
//   },
//   {
//     provinceId: "SFE",
//     name: "San Mariano",
//   },
//   {
//     provinceId: "SFE",
//     name: "San Martín de Las Escobas",
//   },
//   {
//     provinceId: "SFE",
//     name: "San Martín N.",
//   },
//   {
//     provinceId: "SFE",
//     name: "San Vicente",
//   },
//   {
//     provinceId: "SFE",
//     name: "Sancti Spititu",
//   },
//   {
//     provinceId: "SFE",
//     name: "Sanford",
//   },
//   {
//     provinceId: "SFE",
//     name: "Santo Domingo",
//   },
//   {
//     provinceId: "SFE",
//     name: "Santo Tomé",
//   },
//   {
//     provinceId: "SFE",
//     name: "Santurce",
//   },
//   {
//     provinceId: "SFE",
//     name: "Sargento Cabral",
//   },
//   {
//     provinceId: "SFE",
//     name: "Sarmiento",
//   },
//   {
//     provinceId: "SFE",
//     name: "Sastre",
//   },
//   {
//     provinceId: "SFE",
//     name: "Sauce Viejo",
//   },
//   {
//     provinceId: "SFE",
//     name: "Serodino",
//   },
//   {
//     provinceId: "SFE",
//     name: "Silva",
//   },
//   {
//     provinceId: "SFE",
//     name: "Soldini",
//   },
//   {
//     provinceId: "SFE",
//     name: "Soledad",
//   },
//   {
//     provinceId: "SFE",
//     name: "Soutomayor",
//   },
//   {
//     provinceId: "SFE",
//     name: "Sta. Clara de Buena Vista",
//   },
//   {
//     provinceId: "SFE",
//     name: "Sta. Clara de Saguier",
//   },
//   {
//     provinceId: "SFE",
//     name: "Sta. Isabel",
//   },
//   {
//     provinceId: "SFE",
//     name: "Sta. Margarita",
//   },
//   {
//     provinceId: "SFE",
//     name: "Sta. Maria Centro",
//   },
//   {
//     provinceId: "SFE",
//     name: "Sta. María N.",
//   },
//   {
//     provinceId: "SFE",
//     name: "Sta. Rosa",
//   },
//   {
//     provinceId: "SFE",
//     name: "Sta. Teresa",
//   },
//   {
//     provinceId: "SFE",
//     name: "Suardi",
//   },
//   {
//     provinceId: "SFE",
//     name: "Sunchales",
//   },
//   {
//     provinceId: "SFE",
//     name: "Susana",
//   },
//   {
//     provinceId: "SFE",
//     name: "Tacuarendí",
//   },
//   {
//     provinceId: "SFE",
//     name: "Tacural",
//   },
//   {
//     provinceId: "SFE",
//     name: "Tartagal",
//   },
//   {
//     provinceId: "SFE",
//     name: "Teodelina",
//   },
//   {
//     provinceId: "SFE",
//     name: "Theobald",
//   },
//   {
//     provinceId: "SFE",
//     name: "Timbúes",
//   },
//   {
//     provinceId: "SFE",
//     name: "Toba",
//   },
//   {
//     provinceId: "SFE",
//     name: "Tortugas",
//   },
//   {
//     provinceId: "SFE",
//     name: "Tostado",
//   },
//   {
//     provinceId: "SFE",
//     name: "Totoras",
//   },
//   {
//     provinceId: "SFE",
//     name: "Traill",
//   },
//   {
//     provinceId: "SFE",
//     name: "Venado Tuerto",
//   },
//   {
//     provinceId: "SFE",
//     name: "Vera",
//   },
//   {
//     provinceId: "SFE",
//     name: "Vera y Pintado",
//   },
//   {
//     provinceId: "SFE",
//     name: "Videla",
//   },
//   {
//     provinceId: "SFE",
//     name: "Vila",
//   },
//   {
//     provinceId: "SFE",
//     name: "Villa Amelia",
//   },
//   {
//     provinceId: "SFE",
//     name: "Villa Ana",
//   },
//   {
//     provinceId: "SFE",
//     name: "Villa Cañas",
//   },
//   {
//     provinceId: "SFE",
//     name: "Villa Constitución",
//   },
//   {
//     provinceId: "SFE",
//     name: "Villa Eloísa",
//   },
//   {
//     provinceId: "SFE",
//     name: "Villa Gdor. Gálvez",
//   },
//   {
//     provinceId: "SFE",
//     name: "Villa Guillermina",
//   },
//   {
//     provinceId: "SFE",
//     name: "Villa Minetti",
//   },
//   {
//     provinceId: "SFE",
//     name: "Villa Mugueta",
//   },
//   {
//     provinceId: "SFE",
//     name: "Villa Ocampo",
//   },
//   {
//     provinceId: "SFE",
//     name: "Villa San José",
//   },
//   {
//     provinceId: "SFE",
//     name: "Villa Saralegui",
//   },
//   {
//     provinceId: "SFE",
//     name: "Villa Trinidad",
//   },
//   {
//     provinceId: "SFE",
//     name: "Villada",
//   },
//   {
//     provinceId: "SFE",
//     name: "Virginia",
//   },
//   {
//     provinceId: "SFE",
//     name: "Wheelwright",
//   },
//   {
//     provinceId: "SFE",
//     name: "Zavalla",
//   },
//   {
//     provinceId: "SFE",
//     name: "Zenón Pereira",
//   },
//   {
//     provinceId: "SDE",
//     name: "Añatuya",
//   },
//   {
//     provinceId: "SDE",
//     name: "Árraga",
//   },
//   {
//     provinceId: "SDE",
//     name: "Bandera",
//   },
//   {
//     provinceId: "SDE",
//     name: "Bandera Bajada",
//   },
//   {
//     provinceId: "SDE",
//     name: "Beltrán",
//   },
//   {
//     provinceId: "SDE",
//     name: "Brea Pozo",
//   },
//   {
//     provinceId: "SDE",
//     name: "Campo Gallo",
//   },
//   {
//     provinceId: "SDE",
//     name: "Capital",
//   },
//   {
//     provinceId: "SDE",
//     name: "Chilca Juliana",
//   },
//   {
//     provinceId: "SDE",
//     name: "Choya",
//   },
//   {
//     provinceId: "SDE",
//     name: "Clodomira",
//   },
//   {
//     provinceId: "SDE",
//     name: "Col. Alpina",
//   },
//   {
//     provinceId: "SDE",
//     name: "Col. Dora",
//   },
//   {
//     provinceId: "SDE",
//     name: "Col. El Simbolar Robles",
//   },
//   {
//     provinceId: "SDE",
//     name: "El Bobadal",
//   },
//   {
//     provinceId: "SDE",
//     name: "El Charco",
//   },
//   {
//     provinceId: "SDE",
//     name: "El Mojón",
//   },
//   {
//     provinceId: "SDE",
//     name: "Estación Atamisqui",
//   },
//   {
//     provinceId: "SDE",
//     name: "Estación Simbolar",
//   },
//   {
//     provinceId: "SDE",
//     name: "Fernández",
//   },
//   {
//     provinceId: "SDE",
//     name: "Fortín Inca",
//   },
//   {
//     provinceId: "SDE",
//     name: "Frías",
//   },
//   {
//     provinceId: "SDE",
//     name: "Garza",
//   },
//   {
//     provinceId: "SDE",
//     name: "Gramilla",
//   },
//   {
//     provinceId: "SDE",
//     name: "Guardia Escolta",
//   },
//   {
//     provinceId: "SDE",
//     name: "Herrera",
//   },
//   {
//     provinceId: "SDE",
//     name: "Icaño",
//   },
//   {
//     provinceId: "SDE",
//     name: "Ing. Forres",
//   },
//   {
//     provinceId: "SDE",
//     name: "La Banda",
//   },
//   {
//     provinceId: "SDE",
//     name: "La Cañada",
//   },
//   {
//     provinceId: "SDE",
//     name: "Laprida",
//   },
//   {
//     provinceId: "SDE",
//     name: "Lavalle",
//   },
//   {
//     provinceId: "SDE",
//     name: "Loreto",
//   },
//   {
//     provinceId: "SDE",
//     name: "Los Juríes",
//   },
//   {
//     provinceId: "SDE",
//     name: "Los Núñez",
//   },
//   {
//     provinceId: "SDE",
//     name: "Los Pirpintos",
//   },
//   {
//     provinceId: "SDE",
//     name: "Los Quiroga",
//   },
//   {
//     provinceId: "SDE",
//     name: "Los Telares",
//   },
//   {
//     provinceId: "SDE",
//     name: "Lugones",
//   },
//   {
//     provinceId: "SDE",
//     name: "Malbrán",
//   },
//   {
//     provinceId: "SDE",
//     name: "Matara",
//   },
//   {
//     provinceId: "SDE",
//     name: "Medellín",
//   },
//   {
//     provinceId: "SDE",
//     name: "Monte Quemado",
//   },
//   {
//     provinceId: "SDE",
//     name: "Nueva Esperanza",
//   },
//   {
//     provinceId: "SDE",
//     name: "Nueva Francia",
//   },
//   {
//     provinceId: "SDE",
//     name: "Palo Negro",
//   },
//   {
//     provinceId: "SDE",
//     name: "Pampa de Los Guanacos",
//   },
//   {
//     provinceId: "SDE",
//     name: "Pinto",
//   },
//   {
//     provinceId: "SDE",
//     name: "Pozo Hondo",
//   },
//   {
//     provinceId: "SDE",
//     name: "Quimilí",
//   },
//   {
//     provinceId: "SDE",
//     name: "Real Sayana",
//   },
//   {
//     provinceId: "SDE",
//     name: "Sachayoj",
//   },
//   {
//     provinceId: "SDE",
//     name: "San Pedro de Guasayán",
//   },
//   {
//     provinceId: "SDE",
//     name: "Selva",
//   },
//   {
//     provinceId: "SDE",
//     name: "Sol de Julio",
//   },
//   {
//     provinceId: "SDE",
//     name: "Sumampa",
//   },
//   {
//     provinceId: "SDE",
//     name: "Suncho Corral",
//   },
//   {
//     provinceId: "SDE",
//     name: "Taboada",
//   },
//   {
//     provinceId: "SDE",
//     name: "Tapso",
//   },
//   {
//     provinceId: "SDE",
//     name: "Termas de Rio Hondo",
//   },
//   {
//     provinceId: "SDE",
//     name: "Tintina",
//   },
//   {
//     provinceId: "SDE",
//     name: "Tomas Young",
//   },
//   {
//     provinceId: "SDE",
//     name: "Vilelas",
//   },
//   {
//     provinceId: "SDE",
//     name: "Villa Atamisqui",
//   },
//   {
//     provinceId: "SDE",
//     name: "Villa La Punta",
//   },
//   {
//     provinceId: "SDE",
//     name: "Villa Ojo de Agua",
//   },
//   {
//     provinceId: "SDE",
//     name: "Villa Río Hondo",
//   },
//   {
//     provinceId: "SDE",
//     name: "Villa Salavina",
//   },
//   {
//     provinceId: "SDE",
//     name: "Villa Unión",
//   },
//   {
//     provinceId: "SDE",
//     name: "Vilmer",
//   },
//   {
//     provinceId: "SDE",
//     name: "Weisburd",
//   },
//   {
//     provinceId: "TDF",
//     name: "Río Grande",
//   },
//   {
//     provinceId: "TDF",
//     name: "Tolhuin",
//   },
//   {
//     provinceId: "TDF",
//     name: "Ushuaia",
//   },
//   {
//     provinceId: "TUC",
//     name: "Acheral",
//   },
//   {
//     provinceId: "TUC",
//     name: "Agua Dulce",
//   },
//   {
//     provinceId: "TUC",
//     name: "Aguilares",
//   },
//   {
//     provinceId: "TUC",
//     name: "Alderetes",
//   },
//   {
//     provinceId: "TUC",
//     name: "Alpachiri",
//   },
//   {
//     provinceId: "TUC",
//     name: "Alto Verde",
//   },
//   {
//     provinceId: "TUC",
//     name: "Amaicha del Valle",
//   },
//   {
//     provinceId: "TUC",
//     name: "Amberes",
//   },
//   {
//     provinceId: "TUC",
//     name: "Ancajuli",
//   },
//   {
//     provinceId: "TUC",
//     name: "Arcadia",
//   },
//   {
//     provinceId: "TUC",
//     name: "Atahona",
//   },
//   {
//     provinceId: "TUC",
//     name: "Banda del Río Sali",
//   },
//   {
//     provinceId: "TUC",
//     name: "Bella Vista",
//   },
//   {
//     provinceId: "TUC",
//     name: "Buena Vista",
//   },
//   {
//     provinceId: "TUC",
//     name: "Burruyacú",
//   },
//   {
//     provinceId: "TUC",
//     name: "Capitán Cáceres",
//   },
//   {
//     provinceId: "TUC",
//     name: "Cevil Redondo",
//   },
//   {
//     provinceId: "TUC",
//     name: "Choromoro",
//   },
//   {
//     provinceId: "TUC",
//     name: "Ciudacita",
//   },
//   {
//     provinceId: "TUC",
//     name: "Colalao del Valle",
//   },
//   {
//     provinceId: "TUC",
//     name: "Colombres",
//   },
//   {
//     provinceId: "TUC",
//     name: "Concepción",
//   },
//   {
//     provinceId: "TUC",
//     name: "Delfín Gallo",
//   },
//   {
//     provinceId: "TUC",
//     name: "El Bracho",
//   },
//   {
//     provinceId: "TUC",
//     name: "El Cadillal",
//   },
//   {
//     provinceId: "TUC",
//     name: "El Cercado",
//   },
//   {
//     provinceId: "TUC",
//     name: "El Chañar",
//   },
//   {
//     provinceId: "TUC",
//     name: "El Manantial",
//   },
//   {
//     provinceId: "TUC",
//     name: "El Mojón",
//   },
//   {
//     provinceId: "TUC",
//     name: "El Mollar",
//   },
//   {
//     provinceId: "TUC",
//     name: "El Naranjito",
//   },
//   {
//     provinceId: "TUC",
//     name: "El Naranjo",
//   },
//   {
//     provinceId: "TUC",
//     name: "El Polear",
//   },
//   {
//     provinceId: "TUC",
//     name: "El Puestito",
//   },
//   {
//     provinceId: "TUC",
//     name: "El Sacrificio",
//   },
//   {
//     provinceId: "TUC",
//     name: "El Timbó",
//   },
//   {
//     provinceId: "TUC",
//     name: "Escaba",
//   },
//   {
//     provinceId: "TUC",
//     name: "Esquina",
//   },
//   {
//     provinceId: "TUC",
//     name: "Estación Aráoz",
//   },
//   {
//     provinceId: "TUC",
//     name: "Famaillá",
//   },
//   {
//     provinceId: "TUC",
//     name: "Gastone",
//   },
//   {
//     provinceId: "TUC",
//     name: "Gdor. Garmendia",
//   },
//   {
//     provinceId: "TUC",
//     name: "Gdor. Piedrabuena",
//   },
//   {
//     provinceId: "TUC",
//     name: "Graneros",
//   },
//   {
//     provinceId: "TUC",
//     name: "Huasa Pampa",
//   },
//   {
//     provinceId: "TUC",
//     name: "J. B. Alberdi",
//   },
//   {
//     provinceId: "TUC",
//     name: "La Cocha",
//   },
//   {
//     provinceId: "TUC",
//     name: "La Esperanza",
//   },
//   {
//     provinceId: "TUC",
//     name: "La Florida",
//   },
//   {
//     provinceId: "TUC",
//     name: "La Ramada",
//   },
//   {
//     provinceId: "TUC",
//     name: "La Trinidad",
//   },
//   {
//     provinceId: "TUC",
//     name: "Lamadrid",
//   },
//   {
//     provinceId: "TUC",
//     name: "Las Cejas",
//   },
//   {
//     provinceId: "TUC",
//     name: "Las Talas",
//   },
//   {
//     provinceId: "TUC",
//     name: "Las Talitas",
//   },
//   {
//     provinceId: "TUC",
//     name: "Los Bulacio",
//   },
//   {
//     provinceId: "TUC",
//     name: "Los Gómez",
//   },
//   {
//     provinceId: "TUC",
//     name: "Los Nogales",
//   },
//   {
//     provinceId: "TUC",
//     name: "Los Pereyra",
//   },
//   {
//     provinceId: "TUC",
//     name: "Los Pérez",
//   },
//   {
//     provinceId: "TUC",
//     name: "Los Puestos",
//   },
//   {
//     provinceId: "TUC",
//     name: "Los Ralos",
//   },
//   {
//     provinceId: "TUC",
//     name: "Los Sarmientos",
//   },
//   {
//     provinceId: "TUC",
//     name: "Los Sosa",
//   },
//   {
//     provinceId: "TUC",
//     name: "Lules",
//   },
//   {
//     provinceId: "TUC",
//     name: "M. García Fernández",
//   },
//   {
//     provinceId: "TUC",
//     name: "Manuela Pedraza",
//   },
//   {
//     provinceId: "TUC",
//     name: "Medinas",
//   },
//   {
//     provinceId: "TUC",
//     name: "Monte Bello",
//   },
//   {
//     provinceId: "TUC",
//     name: "Monteagudo",
//   },
//   {
//     provinceId: "TUC",
//     name: "Monteros",
//   },
//   {
//     provinceId: "TUC",
//     name: "Padre Monti",
//   },
//   {
//     provinceId: "TUC",
//     name: "Pampa Mayo",
//   },
//   {
//     provinceId: "TUC",
//     name: "Quilmes",
//   },
//   {
//     provinceId: "TUC",
//     name: "Raco",
//   },
//   {
//     provinceId: "TUC",
//     name: "Ranchillos",
//   },
//   {
//     provinceId: "TUC",
//     name: "Río Chico",
//   },
//   {
//     provinceId: "TUC",
//     name: "Río Colorado",
//   },
//   {
//     provinceId: "TUC",
//     name: "Río Seco",
//   },
//   {
//     provinceId: "TUC",
//     name: "Rumi Punco",
//   },
//   {
//     provinceId: "TUC",
//     name: "San Andrés",
//   },
//   {
//     provinceId: "TUC",
//     name: "San Felipe",
//   },
//   {
//     provinceId: "TUC",
//     name: "San Ignacio",
//   },
//   {
//     provinceId: "TUC",
//     name: "San Javier",
//   },
//   {
//     provinceId: "TUC",
//     name: "San José",
//   },
//   {
//     provinceId: "TUC",
//     name: "San Miguel de 25",
//   },
//   {
//     provinceId: "TUC",
//     name: "San Pedro",
//   },
//   {
//     provinceId: "TUC",
//     name: "San Pedro de Colalao",
//   },
//   {
//     provinceId: "TUC",
//     name: "Santa Rosa de Leales",
//   },
//   {
//     provinceId: "TUC",
//     name: "Sgto. Moya",
//   },
//   {
//     provinceId: "TUC",
//     name: "Siete de Abril",
//   },
//   {
//     provinceId: "TUC",
//     name: "Simoca",
//   },
//   {
//     provinceId: "TUC",
//     name: "Soldado Maldonado",
//   },
//   {
//     provinceId: "TUC",
//     name: "Sta. Ana",
//   },
//   {
//     provinceId: "TUC",
//     name: "Sta. Cruz",
//   },
//   {
//     provinceId: "TUC",
//     name: "Sta. Lucía",
//   },
//   {
//     provinceId: "TUC",
//     name: "Taco Ralo",
//   },
//   {
//     provinceId: "TUC",
//     name: "Tafí del Valle",
//   },
//   {
//     provinceId: "TUC",
//     name: "Tafí Viejo",
//   },
//   {
//     provinceId: "TUC",
//     name: "Tapia",
//   },
//   {
//     provinceId: "TUC",
//     name: "Teniente Berdina",
//   },
//   {
//     provinceId: "TUC",
//     name: "Trancas",
//   },
//   {
//     provinceId: "TUC",
//     name: "Villa Belgrano",
//   },
//   {
//     provinceId: "TUC",
//     name: "Villa Benjamín Araoz",
//   },
//   {
//     provinceId: "TUC",
//     name: "Villa Chiligasta",
//   },
//   {
//     provinceId: "TUC",
//     name: "Villa de Leales",
//   },
//   {
//     provinceId: "TUC",
//     name: "Villa Quinteros",
//   },
//   {
//     provinceId: "TUC",
//     name: "Yánima",
//   },
//   {
//     provinceId: "TUC",
//     name: "Yerba Buena",
//   },
//   {
//     provinceId: "TUC",
//     name: "Yerba Buena (S)",
//   },
// ];
