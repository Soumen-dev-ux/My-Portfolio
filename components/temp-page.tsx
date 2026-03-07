import React from 'react';

const ProjectNotice: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center space-y-6" style={{ fontFamily: "'Aparajit', sans-serif" }}>
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground italic">
        Read the message below 👇
      </h1>
      <p className="text-lg text-foreground/80 leading-relaxed max-w-xl mx-auto mb-8 italic">
        Hey this is Soumen Pore as a developer. Thank you for showing your
        interests in my project section. Sorry to say, but something crazy
        feature is under progress. So you are unable to visit any of my
        projects right now. Thank you for your patience and interest. <br /><br />
        This section will be updated soon. Visit my Web Resume / Portfolio back{' '}
        <a href="soumen-pore.vercel.app" className="text-primary font-semibold hover:underline inline-flex items-center">
          Soumen Pore
        </a>
      </p>
    </main>
  );
};

export default ProjectNotice;