import PropType from 'prop-types';
import { Containers, Title } from './Container.styles';
import { FaBookOpen } from 'react-icons/fa';

const Container = ({ title, children }) => (
    <Containers>
        <Title><FaBookOpen /> {title}</Title>
        {children}
    </Containers>
);
Container.propType = {
    title: PropType.string.isRequired,
    children: PropType.node,
};
export default Container;
