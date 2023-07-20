import Head from 'next/head';

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>Sobre a Empresa - Meu Site</title>
        <meta name="description" content="Conheça mais sobre a nossa empresa." />
      </Head>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold mb-4">Sobre a Empresa</h1>
        <p className="mb-6">
          Bem-vindo à página "Sobre a Empresa". Aqui você pode conhecer mais sobre nós e nossa história.
        </p>
        {/* Adicione mais conteúdo sobre a empresa aqui */}
      </main>
    </div>
  );
};

export default AboutPage;