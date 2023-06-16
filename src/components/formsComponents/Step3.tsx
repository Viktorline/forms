import React, { useState } from 'react';
import Modal from './Modal';

import {
  FormBlock,
  MainContent,
  FormLabel,
  FormButton,
  Controls,
  TextArea,
  FormHelper,
  CharCount,
  FormHelperText,
} from '../styles/Step3.styled';

type StepProps = {
  onSend: () => void;
  onBack: () => void;
};

const Step3: React.FC<StepProps> = ({ onSend, onBack }) => {
  const [about, setAbout] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAboutChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    setAbout(text);

    const noSpacesText = text.replace(/\s/g, '');
    setCharCount(noSpacesText.length);
  };

  const handleSend = async () => {
    try {
      setIsModalOpen(true);
    } catch (error) {
      console.error('Failed to send request:');
    }
  };

  return (
    <MainContent>
      <FormBlock>
        <FormLabel>About</FormLabel>
        <TextArea value={about} onChange={handleAboutChange} />
        <FormHelper>
          <FormHelperText>Tip</FormHelperText>
          <CharCount>{charCount}</CharCount>
        </FormHelper>
        <Controls>
          <FormButton variant='back' id='button-back' onClick={onBack}>
            Назад
          </FormButton>
          <FormButton variant='send' id='button-next' onClick={handleSend}>
            Send
          </FormButton>
        </Controls>
        {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
      </FormBlock>
    </MainContent>
  );
};

export default Step3;
