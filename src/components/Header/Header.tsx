import style from './Header.module.scss';
import {FC} from "react";
import addSvg from '../../assets/add.svg'


type Props = {
    page: number;
}
const Header: FC<Props> = (props) => {
const {page} = props;

    return (
        <header className={style.Header}>
            <h1>Today</h1>
            <button>
                <img src={addSvg} className="logo react" alt="React logo" />
            </button>
            <div className={style.page}>{page}</div>
        </header>
    )
}

export default Header;