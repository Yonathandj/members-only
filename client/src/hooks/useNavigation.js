import { useNavigate } from "react-router-dom"

export default function useNavigation() {
  const navigate = useNavigate();
  const navigation = (url) => {
    navigate(url)
  }
  return { navigation }
}
