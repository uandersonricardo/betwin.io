interface IFavoriteRepository {
  insert(userId: string, matchId: string): Promise<void>;
}

export default IFavoriteRepository;
