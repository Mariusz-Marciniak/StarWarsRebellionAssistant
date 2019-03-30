export class System {
  constructor(
    public name: string,
    public region: string,
    public left: string,
    public top: string,
    public basePoints: number
  ) {
  }
}

export const SYSTEMS: System[] = [
  new System('Mon Calamari', 'Mon Calamari region', '5.2%', '5.2%', 5),
  new System('Yavin', 'Mon Calamari region', '2%', '37.3%', 6),
  new System('Felucia', 'Mon Calamari region', '11.6%', '26.8%', 4),
  new System('Saleucami', 'Mon Calamari region', '19.5%', '22.6%', 4),
  new System('Nal Hutta', 'Nal Hutta region', '35.9%', '6.2%', 7),
  new System('Kessel', 'Nal Hutta region', '25.4%', '7.2%', 8),
  new System('Toydaria', 'Nal Hutta region', '32.7%', '29.1%', 4),
  new System('Bothawui', 'Nal Hutta region', '48.7%', '17.2%', 6),
  new System('Geonosis', 'Geonosis region', '76.4%', '18.2%', 6),
  new System('Ryloth', 'Geonosis region', '85%', '3.4%', 10),
  new System('Rodia', 'Geonosis region', '59.3%', '23.5%', 6),
  new System('Tatooine', 'Geonosis region', '61.9%', '2.6%', 10),
  new System('Utapau', 'Utapau region', '90%', '29.5%', 5),
  new System('Naboo', 'Utapau region', '67.7%', '36.7%', 4),
  new System('Dagobah', 'Utapau region', '77%', '51.3%', 4),
  new System('Sullust', 'Utapau region', '67.9%', '64.3%', 4),
  new System('Mustafar', 'Mustafar region', '88.7%', '53.6%', 6),
  new System('Bespin', 'Mustafar region', '82.4%', '73.6%', 8),
  new System('Hoth', 'Mustafar region', '93.7%', '73.2%', 10),
  new System('Endor', 'Mustafar region', '82.3%', '91.9%', 10),
  new System('Kashyyyk', 'Kashyyyk region', '36%', '51.2%', 4),
  new System('Mandalore', 'Kashyyyk region', '25.9%', '63%', 3),
  new System('Malastare', 'Kashyyyk region', '49.8%', '48.1%', 3),
  new System('Dathomir', 'Kashyyyk region', '13.1%', '57.8%', 6),
  new System('Mygeeto', 'Mygeeto region', '7%', '73.3%', 8),
  new System('Ord Mantell', 'Mygeeto region', '24.1%', '86%', 8),
  new System('Ilum', 'Mygeeto region', '14.3%', '89.1%', 10),
  new System('Dantooine', 'Mygeeto region', '7%', '62.8%', 8),
  new System('Coruscant', 'Coruscant region', '45.9%', '88.4%', 0),
  new System('Alderaan', 'Coruscant region', '33.9%', '78%', 2),
  new System('Cato Nemodia', 'Coruscant region', '49.7%', '68.2%', 5),
  new System('Corellia', 'Coruscant region', '62.5%', '84.7%', 2)
];
