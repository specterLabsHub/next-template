export const removeNumber = (string: string) => {
  return string.replaceAll(/[^A-Za-z ]/g, '')
}

export const removeCharacters = (string: string) => {
  return string.replaceAll(/[^\d]/g, '')
}

export const phoneFormatter = (phone: string): string => {
  if (!phone.substring(phone.length - 1).match(/^[a-zA-Z]+$/)) {
    const cleaned = ('' + phone).replace(/\D/g, '')
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/)
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }

    const match2 = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/)
    if (match2) {
      return '(' + match2[1] + ') ' + match2[2] + '-' + match2[3]
    }
    return phone.substring(0, 15)
  } else {
    return ''
  }
}

export const cepFormatter = (cep: string): string => {
  // retira os caracteres indesejados...
  cep = cep.replace(/[^\d]/g, '')

  // realizar a formatação...
  return cep.replace(/(\d{5})(\d{3})/, '$1-$2').substring(0, 9)
}

export const cpfFormatter = (cpf: string): string => {
  // retira os caracteres indesejados...
  cpf = cpf.replace(/[^\d]/g, '')

  // realizar a formatação...
  return cpf
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    .substring(0, 14)
}

export const cnpjFormatter = (cnpj: string): string => {
  // retira os caracteres indesejados...
  cnpj = cnpj.replace(/[^\d]/g, '')

  // realizar a formatação...
  return cnpj
    .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
    .substring(0, 18)
}

export const returnEvenNumbers = (n1: number, n2: number) => {
  let numerosPares = []
  for (let i = n1; numerosPares.length < n2; i++) {
    if (i % 2 == 0) {
      numerosPares.push(i)
    }
  }
  return numerosPares
}
