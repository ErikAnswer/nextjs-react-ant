import { Layout, Menu } from 'antd';
import NextBreadcrumbs from './NextBreadcrumbs';

const { Header, Content, Footer } = Layout;

export function TLayout({ children }) {
    return (
        <Layout className='layout'>
            <Header>
                <div className='logo' />
                <Menu
                    theme='dark'
                    mode='horizontal'
                    defaultSelectedKeys={['2']}>
                    {new Array(2).fill(null).map((_, index) => {
                        const key = index + 1;
                        return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
                    })}
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <NextBreadcrumbs />
                <div className='site-layout-content'>{children}</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    );
}
