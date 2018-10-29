import SuperPerson from './person';

const Andy = new SuperPerson('Andy', 'Ninja running');
const Andy2 = new SuperPerson ('AndyDos', 'Eating good food');

Andy.greet();

Andy2.greet();

Andy.saySuperpower();
Andy2.saySuperpower();
