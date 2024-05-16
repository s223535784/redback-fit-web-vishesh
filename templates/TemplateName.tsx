import { FC } from 'react';
import { TemplateNameWrapper } from './TemplateName.style';

// Replace with object specifying your props and their types, or remove if not needed
type TemplateNameProps = unknown;

const TemplateName: FC<TemplateNameProps> = () => {
	return (
		<TemplateNameWrapper data-testid="TemplateName">
			TemplateName Component
		</TemplateNameWrapper>
	);
};

export default TemplateName;
