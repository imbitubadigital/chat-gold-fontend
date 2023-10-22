# Escopo do projeto GravATA

Abaixo segue descrito os principais endpoints e tabelas para a construção da api para o projeto GravATA.

## Crud de Prompts

### Tabela para salvar os  prompts
```js
// Tabela Prompts
{
  id: 'uuid',
  title: 'Titulo do prompt',
  content: 'Conteúdo do prompt',
  createdAt: '2023-10-04T13:08:41.410Z',
  updatedAt: '2023-10-04T13:08:41.410Z'
}
```

<br />
<br />

### Endpoints do crud de prompts

**Listar todos os prompts:**
```js
// Method GET
// URL: '/prompts'
// Retorno esperado: Array de prompts
[
  {
    id: 'uuid_1',
    title: 'Titulo do prompt 1',
    content: 'Conteúdo do prompt 1',
    createdAt: '2023-10-04T13:08:41.410Z',
    updatedAt: '2023-10-04T13:08:41.410Z'
  },
  {
    id: 'uuid_2',
    title: 'Titulo do prompt 2',
    content: 'Conteúdo do prompt 2',
    createdAt: '2023-10-04T13:08:41.410Z',
    updatedAt: '2023-10-04T13:08:41.410Z'
  },
]
```
<br />
<br />

**Listar um prompt por id:**
```js
// Method GET
// URL: '/prompts/id_do_prompt'
// Retorno esperado: um único de prompt

{
  id: 'uuid_1',
  title: 'Titulo do prompt 1',
  content: 'Conteúdo do prompt 1',
  createdAt: '2023-10-04T13:08:41.410Z',
  updatedAt: '2023-10-04T13:08:41.410Z'
},


```
<br />
<br />


**Cadastrar um prompt:**
```js
// Method POST
// URL: '/prompts'

// Payload enviado para cadastrar em json

{
  title: 'Titulo do novo prompt',
  content: 'Conteúdo do novo prompt',
},


// Retorno será o prompt recém cadastrado em json

  {
    id: 'uuid_1',
    title: 'Titulo do novo prompt',
    content: 'Conteúdo do novo prompt',
    createdAt: '2023-10-04T13:08:41.410Z',
    updatedAt: '2023-10-04T13:08:41.410Z'
  },

```

<br />
<br />


**Editar um prompt:**
```js
// Method PUT ou PATCH
// URL: '/prompts/id_do_prompt'

// Payload enviado para atualizar em json

{
  title: 'Titulo do prompt modificado',
  content: 'Conteúdo do prompt modificado',
},


// Retorno será o prompt recém atualizado

  {
    id: 'uuid_1',
    title: 'Titulo do prompt modificado',
    content: 'Conteúdo do prompt modificado',
    createdAt: '2023-10-04T13:08:41.410Z',
    updatedAt: '2023-10-04T13:08:41.410Z'
  },
]
```

<br />
<br />


**Deletar um prompt:**
```js
// Method DELETE
// URL: '/prompts/id_do_prompt'

// Retorno será o prompt recém deletado ou pode ser qualquer outro retorno que desejar como uma mensagem ou código específico

  {
    id: 'uuid_1',
    title: 'Titulo do prompt deletado',
    content: 'Conteúdo do prompt deletado',
    createdAt: '2023-10-04T13:08:41.410Z',
    updatedAt: '2023-10-04T13:08:41.410Z'
  },

```

<br />
<br />



## Crud de Media

### Tabela para salvar a transcrição das Medias
```js
// Tabela Media ou transcrição
{
  id: 'uuid',
  title: 'Titulo do evento',
  dataEvent: '2023-10-04T13:08:41.410Z', // data do evento ou reunião
  type: 'VIDEO', // Pode receber VIDEO || AUDIO || TRANSCRIPTION
  path: 'caminho_onde_for_salvo_o_arquivo', // Poderá ser null quando o type for TRANSCRIPTION
  transcription: 'texto completo da transcrição', // tambem pode ser null inicialmente
}
```

### Endpoints do fluxo de MEDIA / Upload
**Cadastro de Vídeo (audio.mp3):**
```js
// Method POST
// URL: '/media/video'

// Payload enviado em multipart-form-data

{
  file: 'arquivo_de_audio_extraido_do_video_no_front.mp3',
  prompt: 'Palavra, faladas, no video, separada, por, vírgula, que ajudarão, a extrair, o texto, do, audio',
  title: 'Titulo do evento',
  dataEvent: '2023-10-04T13:08:41.410Z',
},

/*
    Ao receber esses dados, o arquivo deve ser salvo em uma pasta localmente.

    O áudio deve ser submetido ao whisper com o prompt acima (palavras de ajuda)

    agora com texto da transcrição em mãos, um registro deve ser salvo na tabela com todos os dados:

      title
      dataEvent
      type = VIDEO
      path
      transcription
*/

// OBS: Nesse ponto do fluxo pode-se pensar em deletar o audio da pasta localmente

// Retorno será o ID do registro recém criado

  {
    id: 'uuid_1',
  },

```

<br />
<br />

**Cadastro de Audio .webm:**
```js
// Method POST
// URL: '/media/audio'

// Payload enviado em multipart-form-data

{
  file: 'arquivo_de_audio_gravado_no_front.webm',
  prompt: 'Palavra, faladas, na gravação, separada, por, vírgula, que ajudarão, a extrair, o texto, do, audio',
  title: 'Titulo do evento',
  dataEvent: '2023-10-04T13:08:41.410Z',
},

/*
    Ao receber esses dados, o arquivo deve ser salvo em uma pasta localmente.

    O áudio deve ser submetido ao whisper com o prompt acima (palavras de ajuda)

    agora com texto da transcrição em mãos, um registro deve ser salvo na tabela com todos os dados:

      title
      dataEvent
      type = AUDIO
      path
      transcription
*/

// OBS: Nesse ponto do fluxo pode-se pensar em deletar o áudio da pasta localmente

// Retorno será o ID do registro recém criado

  {
    id: 'uuid_1',
  },

```

<br />
<br />

**Cadastro de transcrição:**
```js
// Method POST
// URL: '/media/transcription'

// Payload enviado em json

{
  transcription: 'Texto completo da transcrição',
  title: 'Titulo do evento',
  dataEvent: '2023-10-04T13:08:41.410Z',
},

/*
    Ao receber esses dados, um registro deve ser salvo na tabela com todos os dados:

      title
      dataEvent
      type = TRANSCRIPTION
      path = null
      transcription
*/

// Retorno será o ID do registro recém criado

  {
    id: 'uuid_1',
  },

```

<br />
<br />


### Gerando Resultado
**Fluxo para gerar o resultado:**
```js
// Method POST
// URL: '/ia-generate'

// Payload enviado em json

{
  mediaId: 'uuid', // Id do resgistro de Média
  template: 'Texto completo do prompt',
},

/*
    Ao receber esses dados, com o mediaId busca o registro no banco de dados na tabela MEDIA

    Remonta o template substituindo o {{ transcript }} pelo texto da transcrição que retornou na consulta acima

    Com o template completo, os dados serão submetidos ao modelo
*/



// Retorno será o ID do registro recém criado

  {
    result: 'Texto gerado no retorno da IA',
  },

  /*
  OBSERVAÇÃO:
    Aqui pode talvez ser criado um fluxo para salvar o histórico dos resultados gerados pela IA (Não contemplado nesse desenho)

    Vale lembrar que o usuário pode modificar esse registro no front, e dai teria que pensar a melhor forma, se modificaria esse registro, ou criaria uma cópia, para comparar o quando precisou ser modificado

    Caso essa opção seja incorporada no projeto, o retorno acima deverá retornar também o ID do registro

    {
      id: 'uuid'
      result: 'Texto gerado no retorno da IA',
    },

  */

```
