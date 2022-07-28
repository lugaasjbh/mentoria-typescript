// Como podemos rodar isso em um arquivo .ts sem causar erros?

// resposta 1
let employee = {
  code = 10;
  name = "John";
}

// resposta 2
const employee: {code: number, name: string} = {
  code: 10
  name: 'john'
}

// resposta 3 // Sobre interfaces consulte blog.logrocket.com/types-vs-interfaces-in-typescript/
interface Employee {  
    code: number,
    name: string,
};

const employeeObj = {} as Employee;
  employeeObj.codigo = 10;
  employeeObj.nome = 'john';

const employeeObj2: Employee = {
  code: 10,
  name: 'john'
}
