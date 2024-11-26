import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../core/store';
import { api } from '../../core/api';
import { logoutUser, saveUser, saveUsername } from '../../core/store/slices/userSlice';
import { UserDTO } from '../../core/api/API';

export const UserAccountForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);

    useEffect(() => {
        setUsername(user.username);
        setLogin(user.login);
    }, [user]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (password !== repeatPassword) {
            setError('Пароли не совпадают');
            return;
        }

        const userDTO: UserDTO = {
            login: login,
            password: password,
            username: username,
        };

        try {
            const response = await api.updateUser(userDTO);

            if (response.status === 200) {
                // dispatch(logoutUser());
                dispatch(saveUsername({username}));
                //navigate('/login');
                navigate('/provider-duties');
            } 
            else {
                setError('Не удалось обновить данные. Попробуйте еще раз.');
            }
        } 
        catch (err) {
            setError('Произошла ошибка при обновлении данных. Попробуйте еще раз.');
            console.error(err);
        }
    };

    return (
        <div className="d-flex flex-column gap-3 mt-5" style={{ width: '100%', maxWidth: '600px' }}>
            <h1 className="text-center">Изменение данных аккаунта</h1>
            <Form onSubmit={handleSubmit} className="d-flex flex-column gap-3 mt-5">
                <Form.Floating>
                    <Form.Control
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label htmlFor="username">Имя</label>
                </Form.Floating>

                <Form.Floating>
                    <Form.Control
                        id="login"
                        type="email"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        required
                    />
                    <label htmlFor="login">Логин</label>
                </Form.Floating>

                <Form.Floating>
                    <Form.Control
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="password">Пароль</label>
                </Form.Floating>

                <Form.Floating>
                    <Form.Control
                        id="repeatPassword"
                        type="password"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                    <label htmlFor="repeatPassword">Повторите пароль</label>
                </Form.Floating>

                <button type="submit" className="fs-5 btn btn-block w-100" style={{ color: "#ffffff", backgroundColor: "#210772"}}>Сохранить</button>
                {error && (
                <div className="alert alert-danger mt-3">
                    {error}
                </div>
                )}
            </Form>
        </div>  
    );
}

