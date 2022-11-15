// import from load more api
import { LoadMoreBtn } from './Button.styled';

export const Button = ({onLoadMore}) => {
    return (
    <LoadMoreBtn type="button" onClick={onLoadMore}>Load more</LoadMoreBtn>
    )
}
