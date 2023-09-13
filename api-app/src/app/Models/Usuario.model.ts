// ! = obrigatorio, | undefined = não necessariamente tera algo, ? = nao tem problema se tiver vazio

export class Usuario{
    id?: number;
    nome!: string;
    email!: string;
    senha!: string;
}