# gzip para strings:
import gzip

texto = b"Isso e um teste de compressao GZIP em Python."

# Comprimindo
texto_comprimido = gzip.compress(texto)
print("Texto comprimido:", texto_comprimido)

# Descomprimindo
texto_descomprimido = gzip.decompress(texto_comprimido)
print("Texto descomprimido:", texto_descomprimido.decode())

#gzip para websites:
import gzip
import requests

# Baixando o conteúdo de uma webpage
url = "https://example.com"  # Substitua pelo URL desejado
response = requests.get(url)
html_content = response.content

# Comprimindo o conteúdo da webpage
html_comprimido = gzip.compress(html_content)
print("Conteúdo comprimido:", html_comprimido)

# Descomprimindo o conteúdo da webpage
html_descomprimido = gzip.decompress(html_comprimido)
print("Conteúdo descomprimido:", html_descomprimido.decode('utf-8'))
