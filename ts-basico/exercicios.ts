/**
 * EXERCÍCIOS 
 *
 /* Antes de começar, certifique-se de instalar as 
 * dependências do projeto utilizando "npm install"
 * 
 * Você pode executar o arquivo dos exercícios usando F5, e pode colocar breakpoints no lado esquerdo da linha
 * 
 * MJV School Angular
 * Aluno: Guilherme Oliveira Mussa Tavares
 * Data: 13/06/2022
 * */

/** 1- Crie um tipo para representar um objeto que contenha as suas informações de
 * nome, profissão, idade e uma lista de assuntos de seu interesse.
 **/

type Person = {
  name: string;
  profession: string;
  age: number;
  interests: string[];
};

console.log("1. ", {
  name: "João",
  profession: "Engenheiro Civil",
  age: 35,
  interests: ["Engenharia", "Cinema"],
} as Person);

/** 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o popule de acordo com suas informações.
 **/

const me: Person = {
  name: "Guilherme",
  profession: "Desenvolvedor de Software",
  age: 23,
  interests: [
    "Programação",
    "Linguagens de Programação",
    "Desenvolvimento de Software",
    "Futebol",
    "Música",
  ],
};

console.log("2. ", me);

/** 3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1,
 * e retorne somente a lista de assuntos do objeto.
 **/

function getInterests(person: any) {
  return person.interests;
}

console.log("3. ", getInterests(me));

/** 4 - Coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela.
 **/

function getInterests2(person: Person): string[] {
  return person.interests;
}

console.log("4. ", getInterests2(me));

/** 5 - Crie um enum para representar as Matérias do curso (Angular, Typescript e Git)
 **/

enum CourseSubject {
  Angular = "Angular",
  Typescript = "Typescript",
  Git = "Git",
}

console.log("5. ", CourseSubject);

/** 6 - Crie mais um tipo para representar os professores, contendo nome e uma lista das materias de cada um.
 **/

type Teacher = {
  name: string;
  subjects: CourseSubject[];
};

/** 7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6.
 * Nathan = Angular e Git, Alan = Angular, Typescript e Git
 **/

const nathan: Teacher = {
  name: "Nathan",
  subjects: [CourseSubject.Angular, CourseSubject.Git],
};

const alan: Teacher = {
  name: "Alan",
  subjects: [
    CourseSubject.Angular,
    CourseSubject.Typescript,
    CourseSubject.Git,
  ],
};

console.log("7. ", nathan, alan);

/** 8 - Declare e popule um array com os objetos do exercício 7.
 **/

const teachers: Teacher[] = [nathan, alan];

console.log("8. ", teachers);

/** 9 - Faça uma função que receba um argumento de array de Professor
 * e retorne um novo array de strings contendo somente os nomes dos professores.
 **/

const getTeacherNames = (teachers: Teacher[]): string[] => {
  return teachers.map((teacher) => teacher.name);
};

console.log("9. ", getTeacherNames(teachers));

/** 10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.
 **/

const getTeacherSubjects = (teachers: Teacher[]): CourseSubject[] => {
  return teachers.reduce((acc: CourseSubject[], teacher: Teacher) => {
    return acc.concat(teacher.subjects);
  }, []);
};

console.log("10. ", getTeacherSubjects(teachers));

/** 11 - Faça uma função que receba um argumento de array de Professores e
 * retorne o primeiro Professor encontrado que dê aula de Typescript.
 **/

const getTeacherThatTeachesTypescript = (
  teachers: Teacher[]
): Teacher | undefined => {
  return teachers.find((teacher: Teacher) =>
    teacher.subjects.includes(CourseSubject.Typescript)
  );
};

console.log("11. ", getTeacherThatTeachesTypescript(teachers));
