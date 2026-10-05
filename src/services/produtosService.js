export async function carregarProdutos() {
  // Simula o carregamento assíncrono dos produtos
  // utilizando um arquivo JSON local.
  const modulo = await import('../data/produtos.json')

  return modulo.default
}