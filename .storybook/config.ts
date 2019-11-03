import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';

import '../src/index.css';


const req = requireContext('../src', true, /\/story.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);